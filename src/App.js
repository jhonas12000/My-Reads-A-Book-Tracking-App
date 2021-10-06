import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import ListOfBooks from './Components/ListOfBooks';
//import Main from './Components/main';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>
            <h1>My Reads</h1>
            <h4>A Book Tracking App</h4>
          </NavbarBrand>   
        </div>
      </Navbar>
      <ListOfBooks />
    </div>
  );
}

export default App;
