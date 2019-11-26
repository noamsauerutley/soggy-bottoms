import React, { Component } from 'react';

const CakeDisplay = (props) => {


  return (
    <div className="CakeDisplay">
      <img src={props.cake.imgURL}/>
      <br/>
      <h1>{props.cake.name}</h1>
      <div className="CakeFilter">
        <select value={props.cake.category} onChange={props.updateCategory}>
          <option value="Firm Bottomed">Firm Bottomed</option>
          <option value="Soggy Bottomed">Soggy Bottomed</option>
        </select>
      </div>
    </div>
  )
}

export default CakeDisplay
