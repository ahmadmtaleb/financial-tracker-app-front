import React from 'react'

import {Input} from 'reactstrap'

import './Total.css'


function Total (props){
    return (
        <div className="Total">
        <h1>Total</h1>
  <div>Income:  <Input type="text" value={(props.income) + "$"}  ></Input></div>
  <div>Expences:  <Input type="text" value={(props.expences) + "$"}></Input></div>
<div>Total:     <Input type="text" value={(props.total) + "$"}></Input></div></div>
    );
}

export default Total