
import React from 'react'
import SideNav, { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './SideNav.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Button} from 'reactstrap'

export default class Sidebar extends React.Component{
    render(){
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
                Income & Expences
            </NavText>
        </NavItem>
        <NavItem eventKey="saving">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                saving
            </NavText>
        </NavItem>
        <NavItem eventKey="report">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Reports
            </NavText>
        </NavItem>
        <NavItem eventKey="category">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Category
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
}}




