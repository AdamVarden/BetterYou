import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import View from './Components/view';
import Category from './Components/category';
import Button from 'react-bootstrap/Button'
import MainMenu from './Components/mainMenu';
import Menu, { SubMenu, Item as MenuItem, Divider, ItemGroup as MenuItemGroup } from 'rc-menu';
import 'rc-menu/assets/index.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Menu mode="horizontal">
            <MenuItem>Brands</MenuItem>
            <SubMenu title="Area of Face">
              <SubMenu title="Face">
                <MenuItem><a href="/category/Foundation">Foundation</a></MenuItem>
              </SubMenu>
            </SubMenu>
          </Menu>
          <Switch>
          <Route exact path="/" component={MainMenu} />

            <Route path="/view" component={View} />
            <Route path="/category/:Category" component={Category} />

          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
