import React from 'react';
import '../App.css';
import ProductsDetails from './productdetails';

class Products extends React.Component {
    render(){

       return this.props.myProducts.map((product)=>{

            return <ProductsDetails key ={product._id} product={product}></ProductsDetails>
       });
     }
   }
   export default Products;