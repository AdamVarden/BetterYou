import React from 'react';
import '../App.css';
import Axios from 'axios';
import Products from '../Product/product';

class View extends React.Component {
    state = {
        products: []
      };
      //Gets the info from the database
   componentDidMount() {
    Axios.get('http://localhost:4000/api/products')
      .then(response => {
        console.log(response.data);
        this.setState({ products: response.data.products });
      } )
      .catch(function (error) {
        console.log(error);
      })
  } 

    render(){
        return (

            <div className="App">
              <h1>HEYY</h1>
              <Products myProducts={this.state.products}></Products> 
      
            </div>
          );
        }
      }
   export default View;