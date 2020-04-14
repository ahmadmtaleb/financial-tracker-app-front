import React from 'react'

import ChartsPage from '../../components/PieChart/PieChart'
import BarCharts from '../../components/BarChart/BarCharts'

import './ReportPage.css'
export default class ReportPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
           incomes:0,expenses:0 ,
            
            listIncomes:[],
            listExpenses:[],
           

        }
    }

    async componentDidMount() {
        const token = localStorage.getItem('token');
        if (token !== undefined && token !== null) {
    
          try {
            const response = await fetch(`http://localhost:8000/api/transactions/find-by-type/expense?token=${token}`);
            const json = await response.json();

            if (json.success === true) {
                this.setState({
             listExpenses: json.data
                })
            }
          } catch (error) {}
          try {
            const response = await fetch(`http://localhost:8000/api/transactions/find-by-type/income?token=${token}`);
            const json = await response.json();

            if (json.success === true) {
                this.setState({
             listIncomes: json.data
                })
            }
          } catch (error) {}
        }
    }
    

    calculateIncome=(incomes)=>{
        incomes=0;
    for(let i=0;i<this.state.listIncomes.length;i++){
    
        incomes = incomes +parseInt(this.state.listIncomes[i].amount)
        
    console.log(incomes)
    }
    return incomes;
    }
    calculateExpen=(expenses)=>{
        expenses=0;
    for(let i=0;i<this.state.listExpenses.length;i++){
        expenses= expenses +parseInt(this.state.listExpenses[i].amount);
    }
    return expenses;
    }



    render(){
        return(
            <div className="report_page_main_container">
                <div><ChartsPage incomes={this.calculateIncome(this.state.incomes)} expenses={this.calculateExpen(this.state.expenses)}  ></ChartsPage></div>
                <div><BarCharts incomes={this.calculateIncome(this.state.incomes)} expenses={this.calculateExpen(this.state.expenses)}   ></BarCharts></div>

            </div>

        );
    }
}