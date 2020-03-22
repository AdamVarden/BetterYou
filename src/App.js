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
import BaseTips from './Components/basetips';
import EyesTips from './Components/eyetips';
import SculptingTips from './Components/sculptingtips';
import Button from 'react-bootstrap/Button';
import ProductPage from './Components/productpage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Menu style = {{color:"Pink",backgroundColor:"Black", }} mode="horizontal">
            <MenuItem ><a style={{color:"pink"}} class = "HomeButton" href="/">Better You</a></MenuItem>
            <SubMenu  title="Brands">
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
                <MenuItem><a href="/brand/Fenty/Lips">Lips</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Eyeshadow">Eyeshadow</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Mascara">Mascara</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Eyelashes">Eyelashes</a></MenuItem>

              </SubMenu>

              <SubMenu title="ABH">

                <MenuItem><a href="/brand/Anastasia Beverly Hills/Foundation">Foundation</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Concealer">Concealer</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Powder">Powder</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Bronzer">Bronzer</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Contour">Contour</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Blush">Blush</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Highlighter">Highlighter</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Setting Spray">Setting Spray</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Lips">Lips</a></MenuItem>
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
                <MenuItem><a href="/brand/Nars/Lips">Lips</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Eyeshadow">Eyeshadow</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Mascara">Mascara</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Eyelashes">Eyelashes</a></MenuItem>

              </SubMenu>

            </SubMenu>

            {/* Areas of Face Broken down using sub menus */}
           {/*  <SubMenu title="Area of Face">
              <SubMenu title="Face">
                <MenuItem><a href="/category/Face/Primer">Primer</a></MenuItem>
                <MenuItem><a href="/category/Face/Foundation">Foundation</a></MenuItem>
                <MenuItem><a href="/category/Face/Concealer">Concealer</a></MenuItem>
                <MenuItem><a href="/category/Face/Powder">Powder</a></MenuItem>
                <MenuItem><a href="/category/Face/Bronzer">Bronzer</a></MenuItem>
                <MenuItem><a href="/category/Face/Contour">Contour</a></MenuItem>
                <MenuItem><a href="/category/Face/Blush">Blush</a></MenuItem>
                <MenuItem><a href="/category/Face/Highlighter">Highlighter</a></MenuItem>
                <MenuItem><a href="/category/Face/Setting Spray">Setting Spray</a></MenuItem>

              </SubMenu>
               <SubMenu title="Lips">
                <MenuItem><a href="/category/Lips">Lips</a></MenuItem> 
              </SubMenu>

              <SubMenu title="Eyes">
                <MenuItem><a href="/category/Face/Eyeshadow">Eyeshadow</a></MenuItem>
                <MenuItem><a href="/category/Face/Mascara">Mascara</a></MenuItem>
                <MenuItem><a href="/category/Face/Eyelashes">Eyelashes</a></MenuItem>

              </SubMenu>
            </SubMenu>  */}
            <SubMenu title="Tips & Tricks">
                <MenuItem><a href="/basetips">Base</a></MenuItem> 
                <MenuItem><a href="/eyetips">Eyes</a></MenuItem> 
                <MenuItem><a href="/sculptingtips">Sculpting</a></MenuItem> 
               
            </SubMenu>
            <MenuItem><a style={{color:"pink"}}>Cart</a></MenuItem>

          </Menu>

          <Switch>
            <Route exact path="/" component={MainMenu} />

            <Route path="/view" component={View} />
            <Route path="/category/:AOF/:Category" component={Category} />
            <Route path="/brand/:Brand/:Category" component={Brand} />
            <Route path="/basetips" component={BaseTips} />
            <Route path="/eyetips" component={EyesTips} />
            <Route path="/sculptingtips" component={SculptingTips} />
            <Route path="/productpage/:Name" component={ProductPage} />
           
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
