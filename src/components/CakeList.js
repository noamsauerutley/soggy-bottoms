import React, { Component } from 'react';
import CakeItem from './CakeItem'

const CakeList = (props) => {

  const filteredList = () => {
    if(props.cakeFilter === "All"){
      return props.cakes
    }
    else{
      return props.cakes.filter((cake) => cake.category === props.cakeFilter)
    }
  }

  return (
    <div className="CakeList">
      { filteredList().map((cake) => {
        return <CakeItem key={cake.id} handleDeleteCake={props.handleDeleteCake} handleSelectCake={props.handleSelectCake} cake={cake} />
      }) }
    </div>
  )
}

export default CakeList
