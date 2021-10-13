import React, { Component } from 'react';
import ListOfBooks from './Components/ListOfBooks';
import { BOOKS } from './shared/books';
import Header from './Components/NavbarH';
import Home from './Components/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Future from './Components/Future'
import Read from './Components/Read'
import InProgress from "./Components/InProgress"
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        books: BOOKS
    }
  }
  render () {

    const HomePage = () => {
      return(
        <Home books={this.state.books} />
      );
    };

    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Switch>
            <Route path='/home' render={() => <ListOfBooks books={this.state.books}/> } />
            {/* <Route path='/home' render={() => <Home books={this.state.books} />} /> */}
            <Route path="/read" render={() => <Read books={this.state.books} />} />
            <Route path="/progress" render={() => <InProgress books={this.state.books} />} />
            <Route path="/future" render={() => <Future books={this.state.books} />} />

            {/* <ListOfBooks books={this.state.books}/> */}
            <Redirect to='/home' />
          </Switch>
        </div>
      </BrowserRouter>
      
    )
  }
  
}

export default App;
