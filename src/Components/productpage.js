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
                <h1>Product Page</h1>

                {this.state.products.map(products =>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img key className="cardImage" variant="top" src={products.Shades} />

                        <Card.Body>
                            <Card.Title>{products.Name}</Card.Title>
                        
                            <Card.Text>€{products.Price}</Card.Text>
                            <Select value={products.Shades} options={products.Shades}></Select>
                        </Card.Body>
                    </Card>)}





            </div>
        );
    }
}
export default ProductPage;