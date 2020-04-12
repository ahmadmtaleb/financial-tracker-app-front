import React from 'react'

import Table from '../../components/Table/Table'

import Total from '../../components/Total/Total'

import './HomePage.css'







export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            income:0,
            expences:0,

            listIncome:[{
                
            Ammount:50},
        {Ammount:40}],
        listExpences:[],
         titel:["Income"," Expencses",]   

        }
    }


  
calculateIncome=(income)=>{
    income=0;
  for(let i=0;i<this.state.listIncome.length;i++){
   
    income = income +this.state.listIncome[i].Ammount
    
   console.log(income)
  }
  return income;
}
calculateExpen=(expences)=>{
    expences=0;
  for(let i=0;i<this.state.listExpences.length;i++){
    expences= expences +this.state.listExpences[i].Ammount;
   
   
  }
  return expences;
}



    render(){
        return(
            <div>
               <div className="sider">
                   
                       
                        

                  
                   
                   </div> 
                
               <div className="cont"> 
               
                 <div className="body">
                     <div className="transTable">
                     <Table list={this.state.listIncome} name={this.state.titel[0]} ></Table>
                     <Table list={this.state.listIncome} name={this.state.titel[1]} ></Table>
                     
                         </div>  
                
                <Total income={this.calculateIncome(this.state.income)}


                 expences={this.calculateExpen(this.state.expences)}
                
                 total={((this.calculateIncome(this.state.income))-(this.calculateIncome(this.state.expences)))}
                
                
                ></Total>
                    </div> 
                
                </div>
            </div>
        );
    }
}