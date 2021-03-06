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
import LogIn from './User/routes/login';
import Register from './User/routes/register';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Menu style = {{color:"Pink",backgroundColor:"Black", }} mode="horizontal">
            <MenuItem ><a style={{color:"pink"}} className = "HomeButton" href="/">Better You</a></MenuItem>

            <SubMenu  title="Brands">
              <SubMenu title="Fenty">

                <MenuItem><a href="/brand/Fenty/Primer">Primer</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Foundation">Foundation</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Concealer">Concealer</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Powder">Powder</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Bronzer">Bronzer</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Contour">Contour</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Highlighter">Highlighter</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Lips">Lips</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Eyeshadow">Eyeshadow</a></MenuItem>
                <MenuItem><a href="/brand/Fenty/Mascara">Mascara</a></MenuItem>

              </SubMenu>

              <SubMenu title="ABH">

                <MenuItem><a href="/brand/Anastasia Beverly Hills/Foundation">Foundation</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Bronzer">Bronzer</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Contour">Contour</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Blush">Blush</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Highlighter">Highlighter</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Lips">Lips</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Eyeshadow">Eyeshadow</a></MenuItem>
                <MenuItem><a href="/brand/Anastasia Beverly Hills/Eyelashes">Eyelashes</a></MenuItem>

              </SubMenu>

              <SubMenu title="Nars">

                <MenuItem><a href="/brand/Nars/Primer">Primer</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Foundation">Foundation</a></MenuItem>
                <MenuItem><a href="/brand/Nars/Concealer">Concealer</a></MenuItem>


              </SubMenu>

            </SubMenu>


            <SubMenu title="Tips & Tricks">
                <MenuItem><a href="/basetips">Base</a></MenuItem> 
                <MenuItem><a href="/eyetips">Eyes</a></MenuItem> 
                <MenuItem><a href="/sculptingtips">Sculpting</a></MenuItem> 
               
            </SubMenu>
            <MenuItem><a style={{color:"pink"}}>Cart</a></MenuItem>
            <MenuItem ><a style={{color:"pink"}} className = "LogIn" href="/login">LogIn</a></MenuItem>
            <MenuItem ><a style={{color:"pink"}} className = "Register" href="/register">Register</a></MenuItem>
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
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Register} />
           
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
