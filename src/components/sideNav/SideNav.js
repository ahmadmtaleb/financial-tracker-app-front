
import React from 'react'
import SideNav, { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './SideNav.css'
import {
   
    Link
  } from "react-router-dom";
  import {Button} from 'reactstrap'

function SideBar (props){
   
    return(

<div>
<SideNav  
    onSelect={(selected) => {
        // Add your code here
    }}
    className="slide"
>
    <SideNav.Toggle/>
    <SideNav.Nav defaultSelected="home">
       <NavItem eventKey="I&E">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
               <Link to='/'>Income & Expences</Link> 
            </NavText>
        </NavItem>

       <NavItem eventKey="saving">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link to='/Saving'>  saving</Link>
            </NavText>
        </NavItem>

        <NavItem eventKey="report">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link to='/Reports'> Reports</Link>
            </NavText>
        </NavItem>

        <NavItem eventKey="category">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link to='/Category'>Category</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="Transaction">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link to='/Transaction'>Transaction</Link>
            </NavText>
        </NavItem>
        
        
        <NavItem eventKey="logout" className="logout">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Logout
            </NavText>
        </NavItem>
       
        
       
    </SideNav.Nav>
</SideNav>
</div>
    )
}
export default SideBar





