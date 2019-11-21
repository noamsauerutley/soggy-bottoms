import React, { Component } from 'react';

const CakeItem = (props) => {
  const callback = function(arg){
    console.log("hhhheeeeeeyyyyy", arg)
  }
  return (
    <div>
      <div className="CakeItem">
        { props.cake.name }
      </div>
      <div className="CakeBottomBun">
        <button onClick={() => props.handleSelectCake(props.cake) }>Show</button>
        <button onClick={() => props.handleDeleteCake(props.cake)}>Delete</button>
      </div>
    </div>
  )
}

export default CakeItem
