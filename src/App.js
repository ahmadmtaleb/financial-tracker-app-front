import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Sidebar from './components/sideNav/SideNav';
import Home from './pages/HomePage/HomePage';
import Transaction from './pages/TransactionPage/TransactionPage';
import Saving from './pages/SavingPage/SavingPage';
import ReportPage from './pages/ReportPage/ReportPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Header from '../src/components/Header/Header'


export default class App extends  React.Component {

    constructor(props){
      super(props);
      this.state={
        UserName:"Mahmoud"
      }
    }
  render(){
  return (
    <>
      <BrowserRouter>
      <Switch>
        
        <Route path='/'>
          <div>
          <Route path='/'>
            <Header></Header>
          <Sidebar name={this.state.UserName}></Sidebar>
          
          <div>
            
            <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/Category' component={CategoryPage}></Route>
            <Route path='/Report' component={ReportPage}></Route>
            <Route path='/Saving' component={Saving}></Route>
            <Route path='/Transaction' component={Transaction}></Route>
            </Switch>
          
          
          </div>
          </Route>
          </div>
        </Route>
        
        
        </Switch></BrowserRouter>


    </>
  );
}}
