import React from 'react';
import '../App.css';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

class ProductPage extends React.Component {
    state = {
        products: [],
    }
    componentDidMount() {

        Axios.get('http://localhost:4000/api/products/' + this.props.match.params.Name)
            .then((response) => {
                console.log("Response.data ");
                console.log(response.data);
                const products = response.data;
                this.setState({ 
                    products
                 });



            })
            .catch()
    }

    render() {
        return (

            <div className="App">

                {this.state.products.map(products =>
                    <div>
                        <h1>{products.Name}</h1>
                        <img src = {products.DefaultImage} className = "ProductImage"></img>
                         <h2>Price: €{products.Price}</h2>
                         <div>
                            <p>{products.Info}</p>
                        </div>
                    </div>

                    )}

            </div>
        );
    }
}
export default ProductPage;