
import React from 'react';
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './SideNav.css';

import {
   
    Link
  } from "react-router-dom";
 

function SideBar (props){
   
    return(

<div className="side_nav_main_container">
<SideNav  
    onSelect={(selected) => {
        // Add your code here
    }}
    className="side_nav_slide_container"
>
    <SideNav.Toggle/>
    
    <SideNav.Nav defaultSelected="home">
    <div className="userN">   <h6 className="namef">Welcome</h6>
<h6 className="namef">{props.name}</h6></div>
    <Link className="side_nav_links"  to='/'>  <NavItem className="side_nav_nait"  eventKey="I&E">
    <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                
             Dashboard
                
            </NavText>
        </NavItem></Link>

        <Link className="side_nav_links"  to='/Report'>  <NavItem className="side_nav_nait" eventKey="Report">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
             Report
            </NavText>
        </NavItem></Link>

       

        <Link className="side_nav_links" to='/Category'> <NavItem className="side_nav_nait"   eventKey="category">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            Category
            </NavText>
        </NavItem></Link>


        <Link className="side_nav_links"  to='/Transaction'>  <NavItem className="side_nav_nait"  eventKey="Transaction">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
               Transaction
            </NavText>
        </NavItem></Link>
        
        
       <Link className="side_nav_links" to='/Landing'> <NavItem className="side_nav_nait-logout" eventKey="logout" >
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Logout
            </NavText>
        </NavItem></Link>
       
        
       
    </SideNav.Nav>
</SideNav>
</div>
    )
}
export default SideBar;