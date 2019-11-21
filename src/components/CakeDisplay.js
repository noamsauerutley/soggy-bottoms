import React, { Component } from 'react';

const CakeDisplay = (props) => {
  return (
    <div className="CakeDisplay">
      <img src={"" /* Insert cake Image URL here */}/>
      <br/>
      <h1>Insert Cake Name Here</h1>
      <br/>
      <select onChange={console.log}>
        <option value="Soggy Bottomed">Soggy Bottomed</option>
        <option value="Firm Bottomed">Firm Bottomed</option>
      </select>
    </div>
  )
}

export default CakeDisplay
