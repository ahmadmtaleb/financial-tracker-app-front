import React from 'react';

import {Input} from 'reactstrap';

import './Total.css';


function Total (props){
    return (
        <div className="total_main_container_total">
        <h1>Total</h1>
  <div>Income:  <Input type="text" value={(props.incomes) + "$"}  ></Input></div>
  <div>Expences:  <Input type="text" value={(props.expenses) + "$"}></Input></div>
<div>Total:     <Input type="text" value={(props.total) + "$"}></Input></div></div>
    );
}

export default Total;