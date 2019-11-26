import React, { Component } from 'react';
import CakeList from './CakeList'
import CakeFilter from './CakeFilter'

export default class CakeContainer extends Component {

  render(){
    return (
      <div className="CakeContainer">
        <CakeFilter setCurrentCakeList={this.props.setCurrentCakeList} />
        <CakeList cakes={this.props.cakes} cakeFilter={this.cakeFilter} selectCake={this.props.selectCake}/>
      </div>
    )
  }
}
