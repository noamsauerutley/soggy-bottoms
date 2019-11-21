import React, { Component } from 'react';
import CakeList from './CakeList'
import CakeFilter from './CakeFilter'

export default class CakeContainer extends Component {

  state = {
    cakeFilter: "All"
  }

  getCakeFilter = (selection) => {
    this.setState({ cakeFilter: selection })
  }

  render(){
    return (
      <div className="CakeContainer">
        <CakeFilter getCakeFilter={ this.getCakeFilter } />
        <CakeList
        handleDeleteCake={ this.props.handleDeleteCake }
        cakeFilter={this.state.cakeFilter }
        handleSelectCake={ this.props.handleSelectCake }
        cakes={ this.props.cakes } />
      </div>
    )
  }
}
