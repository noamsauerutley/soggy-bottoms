import React, { Component } from 'react';
import CakeItem from './CakeItem'

const CakeList = (props) => {

  return (
    <div className="CakeList">
      {props.cakes.map(cake => {
        return <CakeItem key={cake.id} cake={cake} selectCake={props.selectCake}/>
      }) }
    </div>
  )
}

export default CakeList
