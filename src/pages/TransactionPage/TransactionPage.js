
import React from 'react'

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';
  import 'antd/dist/antd.css';
  import './TransactionPage.css'

export default class  Transaction extends React.Component{
constructor(props){
    super(props);
    this.state={
        type:["IncomeFix","IncomeRec","ExpencsesFix","ExpencesRec"],
        category:[],
    }
}

    render(){
        return(
            <div className="fi" >
                <div></div>
                <div >
                <h3>Add Transaction</h3>
            <Form>
               
              
              <Form.Item label="Title">
                <Input />
              </Form.Item>
              <Form.Item label="Category">
                <Select>
                {this.state.category.map((item,index)=>
              <Select.Option key={index} value={this.state.type[index]}>
              {this.state.type[index]}
              </Select.Option>
              )}
                </Select>
              </Form.Item>
              <Form.Item label="Type">
                <Select>
              {this.state.type.map((item,index)=>
              <Select.Option key={index} value={this.state.type[index]}>
              {this.state.type[index]}
              </Select.Option>
              )}

            
           
                </Select>
              </Form.Item>
              
              
              <Form.Item label="DatePicker">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Ammount">
                <InputNumber />
              </Form.Item>
              
              
             
              <Form.Item label="Confirm">
                <Button type="primary" className="btna">Add</Button>
              </Form.Item>
            </Form>
          </div>
          <div></div></div>
        );
      };
    }
