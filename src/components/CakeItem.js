import React, { Component } from 'react';

const CakeItem = (props) => {

  const handleClick = (event) => {
    props.selectCake(props.cake)
  }
  return (
    <div>
      <div className="CakeItem">
        
        {props.cake.name}
      </div>
      <div className="CakeBottomBun">
        <button onClick={handleClick}>Show</button>
        <button onClick={console.log}>Delete</button>
      </div>
    </div>
  )
}

export default CakeItem
