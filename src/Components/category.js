import React from 'react';
import '../App.css';
import Axios from 'axios';
import Products from '../Product/product';

class Category extends React.Component {
    state = {
        products: []
      };
      componentDidMount() {
          
        console.log(this.props.match.params.Category);

        Axios.get('http://localhost:4000/api/products/' + this.props.match.params.Category)
        .then(response => {
            console.log(response.data);
            this.setState({ products: response.data });
          } )
          .catch(function (error) {
            console.log(error);
          })
      
    }

    render(){
        return (

            <div className="App">
              <h1>MEEE</h1>
              <Products myProducts={this.state.products}></Products> 
      
            </div>
          );
        }
      }
   export default Category;