import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import View from './Components/view';
import Category from './Components/category';
import MainMenu from './Components/mainMenu';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';
import Brand from './Components/brand';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Menu style = {{color:"black"}} mode="horizontal">
            <MenuItem><a class = "HomeButton" href="/">Better You</a></MenuItem>
            <SubMenu title="Brands">
              <SubMenu title="Fenty">

                <MenuItem><a href="/brand/Fenty/Primer">Primer</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Foundation">Foundation</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Concealer">Concealer</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Powder">Powder</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Bronzer">Bronzer</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Contour">Contour</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Blush">Blush</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Highlighter">Highlighter</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Setting Spray">Setting Spray</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Primer">Lips</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Eyeshadow">Eyeshadow</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Mascara">Mascara</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Eyelashes">Eyelashes</a></MenuItem>

              </SubMenu>

              <SubMenu title="ABH">

                <MenuItem><a href="/brand/Anastasia Beverly Hills/Primer">Primer</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Foundation">Foundation</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Concealer">Concealer</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Powder">Powder</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Bronzer">Bronzer</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Contour">Contour</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Blush">Blush</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Highlighter">Highlighter</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Setting Spray">Setting Spray</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Primer">Lips</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Eyeshadow">Eyeshadow</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Mascara">Mascara</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Eyelashes">Eyelashes</a></MenuItem>

              </SubMenu>

              <SubMenu title="Nars">

                <MenuItem><a href="/brand/Nars/Primer">Primer</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Foundation">Foundation</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Concealer">Concealer</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Powder">Powder</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Bronzer">Bronzer</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Contour">Contour</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Blush">Blush</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Highlighter">Highlighter</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Setting Spray">Setting Spray</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Primer">Lips</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Eyeshadow">Eyeshadow</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Mascara">Mascara</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Eyelashes">Eyelashes</a></MenuItem>

              </SubMenu>

            </SubMenu>

            {/* Areas of Face Broken down using sub menus */}
            <SubMenu title="Area of Face">
              <SubMenu title="Face">
                <MenuItem><a href="/category/Primer">Primer</a></MenuItem>
                <MenuItem><a href="/category/Foundation">Foundation</a></MenuItem>
                <MenuItem><a href="/category/Concealer">Concealer</a></MenuItem>
                <MenuItem><a href="/category/Powder">Powder</a></MenuItem>
                <MenuItem><a href="/category/Bronzer">Bronzer</a></MenuItem>
                <MenuItem><a href="/category/Contour">Contour</a></MenuItem>
                <MenuItem><a href="/category/Blush">Blush</a></MenuItem>
                <MenuItem><a href="/category/Highlighter">Highlighter</a></MenuItem>
                <MenuItem><a href="/category/Setting Spray">Setting Spray</a></MenuItem>

              </SubMenu>
              <SubMenu title="Lips">
                <MenuItem><a href="/category/Lips">Lips</a></MenuItem> {/* Lips */}
              </SubMenu>

              <SubMenu title="Eyes">
                <MenuItem><a href="/category/Eyeshadow">Eyeshadow</a></MenuItem>
                <MenuItem><a href="/category/Mascara">Mascara</a></MenuItem>
                <MenuItem><a href="/category/Eyelashes">Eyelashes</a></MenuItem>

              </SubMenu>
            </SubMenu>
          </Menu>


          <Switch>
            <Route exact path="/" component={MainMenu} />

            <Route path="/view" component={View} />
            <Route path="/category/:Category" component={Category} />
            <Route path="/brand/:Brand/:Category" component={Brand} />

          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
