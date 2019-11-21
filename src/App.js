import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer'
import CakeDisplay from './components/CakeDisplay'

class App extends Component {
  state = {
    cakes: [],
    cakeId: null
  }

  componentDidMount(){
    fetch('http://localhost:3001/cakes')
    .then(res => res.json())
    .then(data => {
      this.setState({
        cakes: data,
        cakeId: 1
      })
    })
  }

  handleSelectCake = (cake) => {
    this.setState({
      cakeId: cake.id
    })
  }

  selectedCake = () => {
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

  updateCake = () => {
    const cakes = this.state.cakes.map(cake => {
      if (cake.id === this.state.cakeId){
        cake.category = cake.category === "Firm Bottomed" ? "Soggy Bottomed" : "Firm Bottomed"
      }
      return cake
    })
    this.setState({ cakes }, this.persistCakeChange )
  }

  persistCakeChange = () => {
    const cake = this.selectedCake()
    const options = {
      method: "PATCH",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({ category: cake.category })
    }
    fetch(`http://localhost:3001/cakes/${cake.id}`, options)
  }

  handleDeleteCake = (cake) => {
      const newCakes = this.state.cakes.filter((cakeItem) => cakeItem.id !== cake.id)

      this.setState({
        cakes: newCakes,
        cakeId: newCakes[0].id
      })
  }

  render() {
    return (
      <div id="App">
        <CakeContainer handleDeleteCake={this.handleDeleteCake} handleSelectCake={this.handleSelectCake} cakes={this.state.cakes} />
        <CakeDisplay updateCake={this.updateCake} cake={ this.selectedCake() }/>
      </div>
    );
  }
}

export default App;
