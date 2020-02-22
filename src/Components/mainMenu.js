import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
class MainMenu extends React.Component {

  render() {
    return (

      <div className="App">
        <h1 className = "titles">Welcome to Better You</h1>
        <Carousel className = "Carousel">
          <Carousel.Item>
            <img
              className="image"
              src="https://www.boots.ie/resource/image/2174128/heroteaser_short/1360/502/bf0c93784b39cd879e650eed67ece2bf/ME/2019-12-project-domino-pre-launch-bt-hc-01.jpg"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img

              className="image"
              src="https://www.boots.ie/resource/image/2181938/heroteaser_short/1360/502/650f6b62df78929dc263e8babe471553/Mn/34082-beauty-eyes-hero-7a-maybelline-supplied.jpg"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image"

              src="https://www.boots.ie/resource/image/2182474/heroteaser_short/1360/502/f59cc5d9f2e3520efe1bb7b8d06d3e6f/KC/33365-beauty-accessories-hero-6a-essieexpressie.jpg"
            />


          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default MainMenu;