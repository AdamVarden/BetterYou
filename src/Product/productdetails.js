import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
class ProductsDetails extends React.Component {
    constructor() {
        super();

    }
/*     componentDidMount() {

        Axios.get('http://localhost:4000/api/products/' + this.props.match.params.Category)
        .then((response)=>{
            //Sets the state received from the database
            this.setState({
                          

            })
        })
        .catch()
    } */


    render() {
        return (

            <div className ="row">

                <Card style={{ width: '18rem' }}>
                    <Card.Img className="cardImage"  variant="top" src= {this.props.product.Shades[0]["110C"]} />
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
export default ProductsDetails;