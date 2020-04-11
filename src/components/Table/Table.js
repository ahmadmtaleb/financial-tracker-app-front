import React from 'react'


import { Table, Input } from 'reactstrap';

import { Component } from 'react'

import './Table.css'


function TabelForm(props) {




  const numbers = props.list;
  const listItems = numbers.map((number, index) =>
    <td key={index}></td>
  );



  console.log(props)

  return (

    <div className="bodyTable">
     
      <h3>{props.name}</h3>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Titel</th>
            <th>Description</th>
            <th>Date</th>
            <th>Ammount</th>

          </tr>
        </thead>
        <tbody>
        {props.list.map((item,index)=>
             <tr key={index}>
             <th scope="row">{item.ID}</th>
           <td>{item.category}</td>
           <td>{item.Description}</td>
           <td>{item.Title}</td>
           <td>{item.Date}</td>
           <td>{item.Ammount}</td>
          </tr>
           )}
          

        </tbody>
      </Table></div>
  );
}
export default TabelForm









