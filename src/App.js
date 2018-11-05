import React, { Component } from 'react';
import './App.css';
import Books from './Books';
import Cities from './Cities';
import Data from './Data.json'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>          
          <img src={"/assets/searchme_logo.png"} alt="logo"/>
        </header>
        <div className="app-container">
          <Books data={Data.books} placeholder={'Find a book'} thumnailImg ={Data.booksUrl} autofocus searchKeyValue={'title'}/>
          <Cities data={Data.cities} placeholder={'Find a book'} thumnailImg ={Data.cityUrl}/>
        </div>
      </div>
    );
  }
}

export default App;
