import React from 'react'


import { Table} from 'reactstrap';



import './TableCate.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function TabelForm(props) {








  console.log(props)

  return (

    <div className="Table_cat_main">
     
      <h3>{props.name}</h3>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Name</th>
           

          </tr>
        </thead>
        <tbody>
        {props.list.map((item,index)=>
             <tr key={index}>
             <th scope="row">{item.ID}</th>
           <td>{item.category}</td>
           <td>{item.Name}</td>
           
          </tr>
           )}
          

        </tbody>
      </Table></div>
  );
}
export default TabelForm