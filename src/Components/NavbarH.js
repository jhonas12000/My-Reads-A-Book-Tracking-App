import React, { Component } from 'react';
import {  Nav, Navbar, NavbarBrand, NavItem, Jumbotron  } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    render () {
        return(
            <>
                <Jumbotron fluid>
                    <div dark className='container' backgroound='primary'>
                        <div className='row'>
                            <h1>My Reads</h1>
                            <h3>A Book Tracking App</h3>
                            
                        </div>

                    </div>
                </Jumbotron>
                <Navbar dark sticky='top' expand='md'>
                    <div className='container'>
                        <NavbarBrand  >
                        
                            <Nav navbar >
                            <img className='nav-link' to='/home' src="/images/booklogo.jpg" height="50" width="70" alt="Book Logo" justify-content='end'/>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/read'>Read</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/progress'>In-Progress</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/future'>Future</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/review'>Review</NavLink>
                                </NavItem>
                            </Nav>
                        </NavbarBrand>
                    </div>
                </Navbar> 
            </>
        )
    }
}

export default Header;