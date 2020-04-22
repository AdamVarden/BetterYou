import React from 'react';
import '../App.css';
import Axios from 'axios';
import Products from '../Product/product';

class Brand extends React.Component {
  state = {
    products: []
  };
  componentDidMount() {

    console.log(this.props.match.params.Category);
    // Sends the get request for the specified brand in the specified category
    Axios.get('http://localhost:4000/api/products/' + this.props.match.params.Brand + '/' + this.props.match.params.Category)
      .then(response => {
        console.log(response.data);
        this.setState({ products: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  render() {
    return (

      <div className="App">
        {/*Passes the response through products and renders out all the products from the response*/}
        <Products myProducts={this.state.products}></Products>

      </div>
    );
  }
}
export default Brand;