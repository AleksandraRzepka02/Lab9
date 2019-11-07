
import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/read" component={Read} />
            <Route path="/create" component={Create} />
            <Route path="/edit" component={Edit}/>
          </Switch>
          {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
