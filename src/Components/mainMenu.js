import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
class MainMenu extends React.Component {

  render() {
    return (

      <div className="App">
        <h1 className="titles">Welcome to Better You</h1>
        <Carousel className="Carousel">
          <Carousel.Item>
            <img
              className="image"
              src="https://farm8.staticflickr.com/7532/15698143634_3d1ed3313c_b.jpg"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img

              className="image"
              src="https://metro.co.uk/wp-content/uploads/2017/09/rhianna-launches-fenty-beauty-in-the-uk.png"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image"

              src="https://dy6g3i6a1660s.cloudfront.net/sYNmGEJdix-twIsHNGIN3weoBLA/orig.jpg"
            />


          </Carousel.Item>
        </Carousel>
        <br></br>
        <div className="info">
          <h1 className = "titles">Welcome to Better You</h1>
          <h4 className = "titles">
            Better You is a brand that helps make a better you. We pride ourselves on individuality. 
            We may be a small brand but we aim to grow big. We provide a select few of cosmetic brands for your choosing.
            We also provide tips and tricks for our users to better help their make up journey 
          </h4>
        </div>
        <br></br>
      </div>
    );
  }
}
export default MainMenu;