import React, { Component } from 'react';

const CakeFilter = (props) => {
  return (
    <div className="CakeFilter">
      <select onChange={(e) => props.getCakeFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Soggy Bottomed">Soggy Bottomed</option>
        <option value="Firm Bottomed">Firm Bottomed</option>
      </select>
    </div>
  )
}

export default CakeFilter
