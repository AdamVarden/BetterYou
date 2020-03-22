import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
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

                <Card style={{ width: '18rem',backgroundColor:'grey' }}>
                    <Card.Img className="cardImage"  variant="top" src= {this.props.product.DefaultImage} />
                    <Card.Body>
                        <Card.Title>{this.props.product.Name}</Card.Title>

                        <Card.Text>€{this.props.product.Price}</Card.Text>
                        <Link to= {"/productpage/"+this.props.product.Name} >Shop Now</Link>
                    </Card.Body>
                </Card>

            </div>

        );
    }
}
export default ProductsDetails;