import React from 'react'
import {
    Form,
    Input,
    Button,
    
    
  } from 'antd';
  import 'antd/dist/antd.css';
  import './CategoryPage.css'
  import Table from '../../components/CateTable/TableCate'

export default class CategoryPage extends React.Component{
    
        constructor(props){
            super(props);
            this.state={
                Category:[]
            }
        }

    render(){
        return(
            <div><h3 className="het">Add Category</h3>
            
                <Form className="ctn">
                <Form.Item label="Category Name:">
                <Input placeholder="Add New Category" />
              </Form.Item>
              <Form.Item className="btnA" >
                <Button type="primary" className="btna">Add</Button>
              </Form.Item>
                </Form>
                 
                 <Table list={this.state.Category}></Table>
                

            
            </div>

        );
    }
}