import React from 'react';
import '../App.css';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProductPage extends React.Component {
    state = {
        products: []
    };
    componentDidMount() {

        console.log(this.props.match.params.Category);

        Axios.get('http://localhost:4000/api/products/' + this.props.match.params.Name)
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
                <h1>Product Page</h1>

   

                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="cardImage" variant="top" src={this.props.product.Shades[0]["110C"]} />
                        <Card.Body>
                            <Card.Title>{this.props.product.Name}</Card.Title>

                            <Card.Text>€{this.props.product.Price}</Card.Text>
                            <Button >Shop Now</Button>
                        </Card.Body>
                    </Card>


            </div>
        );
    }
}
export default ProductPage;