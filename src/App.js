import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.css';


class App extends  React.Component {

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
          <Route path='/'  >
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
export default App;


