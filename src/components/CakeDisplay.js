import React, { Component } from 'react';

const CakeDisplay = (props) => {
  return (
    <div className="CakeDisplay">
      <img src={ props.cake.imgURL }/>
      <br/>
      <h1>{ props.cake.name }</h1>
      <br/>
      <div className='CakeFilter'>
      <select value={ props.cake.category } onChange={() => props.updateCake()}>
        <option value="Soggy Bottomed">Soggy Bottomed</option>
        <option value="Firm Bottomed">Firm Bottomed</option>
      </select>
      </div>
    </div>
  )
}

export default CakeDisplay
