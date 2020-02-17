import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import View from './Components/view';
import Category from './Components/category';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Navbar bg="light" expand="lg">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/view">All Products </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/category/Foundation">Category Check </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
          <Switch>

            <Route path="/view" component={View} />
            <Route path="/category/:Category" component={Category} />

          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
