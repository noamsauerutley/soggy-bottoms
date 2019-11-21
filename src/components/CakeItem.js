import React, { Component } from 'react';

const CakeItem = (props) => {
  return (
    <div>
      <div className="CakeItem">
        { /* Name of Cake Here */ }
      </div>
      <div className="CakeBottomBun">
        <button onClick={console.log}>Show</button>
        <button onClick={console.log}>Delete</button>
      </div>
    </div>
  )
}

export default CakeItem
