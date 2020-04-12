
import React from 'react'
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './SideNav.css'
import {
   
    Link
  } from "react-router-dom";
 

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
    <Link className="links"  to='/'>  <NavItem className="nait"  eventKey="I&E">
    <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                
             Dashboard
                
            </NavText>
        </NavItem></Link>

        <Link className="links"  to='/Report'>  <NavItem className="nait" eventKey="Report">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
             Report
            </NavText>
        </NavItem></Link>

       

        <Link className="links" to='/Category'> <NavItem className="nait"   eventKey="category">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            Category
            </NavText>
        </NavItem></Link>


        <Link className="links"  to='/Transaction'>  <NavItem className="nait"  eventKey="Transaction">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
               Transaction
            </NavText>
        </NavItem></Link>
        
        
       <Link className="links" to='/Landing'> <NavItem className="nait-logout" eventKey="logout" >
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
export default SideBar





