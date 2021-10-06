import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import ListOfBooks from './Components/ListOfBooks';
import { BOOKS } from './shared/books';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        books: BOOKS
    }
  }
  render () {
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
        <ListOfBooks books={this.state.books}/>
      </div>
    )
  }
  
}

export default App;
