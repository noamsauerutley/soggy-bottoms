import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer'
import CakeDisplay from './components/CakeDisplay'

export const SOGGYBOTTOM = "Soggy Bottomed"
export const FIRMBOTTOM = "Firm Bottomed"
export const ALL = "All"

class App extends Component {

  state = {
    cakes: [],
    soggyBottoms: [],
    firmBottoms: [],
    cakeId: null,
    currentCakeList:  ALL
  }

  async componentDidMount() {
    const cakeBatter = await fetch('http://localhost:3001/cakes')
    const cakes = await cakeBatter.json()
    const soggyCakes = cakes.filter(cake => {
      return cake.category === SOGGYBOTTOM
    })
    const firmCakes = cakes.filter(cake => {
      return cake.category === FIRMBOTTOM
    })
    this.setState({ cakes, cakeId: 1, soggyBottoms: soggyCakes, firmBottoms: firmCakes })
  }

  cakeSwitch() {
    switch(this.state.currentCakeList) {
      case SOGGYBOTTOM:
        return this.state.soggyBottoms;
        
      case FIRMBOTTOM:
        return this.state.firmBottoms
          
      default:
        return this.state.cakes;
    }
  }

  selectCake = (cake) => {
    this.setState({
      cakeId: cake.id
    })
  }

  setCurrentCakeList = (listName) => {
    this.setState({
      currentCakeList: listName,
    })
  }

  selectedCake(){
    if (this.state.cakeId) {
      return this.state.cakes.find( b => b.id === this.state.cakeId)
    } else {
      return {
        id: 1,
        name: "The Shovler",
        category: "Firm Bottomed",
        imgURL: "https://www.tasteofhome.com/wp-content/uploads/2018/04/5052775f.jpg"
      }
    }
  }
  
  updateCategory=()=>{
    const updatedCakes = this.state.cakes.map( cake => {
      if(cake.id === this.state.cakeId){
       cake.category = cake.category === FIRMBOTTOM ? SOGGYBOTTOM : FIRMBOTTOM
      }
      return cake
    })
    this.setState({cakes: updatedCakes}, this.persistCakeCategory)
  }


  persistCakeCategory = () => {
    const cake = this.selectedCake()
    const configObj = {
      method: "PATCH",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({ category: cake.category })
    }
    fetch(`http://localhost:3001/cakes/${cake.id}`, configObj)
  }

  render() {   
    return (
      <div id="App">
        <CakeContainer setCurrentCakeList={this.setCurrentCakeList} selectCake={this.selectCake} cakes={this.cakeSwitch()} />
        <CakeDisplay cake={this.selectedCake()} updateCategory={this.updateCategory}/>
      </div>
    );
  }
}

export default App;
