import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player';
import Youtube from 'react-youtube';


class BaseTips extends React.Component {

  videoOnReady(event){
    //access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target)
  }

    render(){
      const opts = {
        height:'390',
        width:'640',
        playerVars:{//https://developers.google.com/youtube/player_parameter,
          autoplay: 1
        }
      }
        const{videoId}= this.props
        return (

            <div className="App">
              <h1>BaseTips</h1>
              <p>Below are just a few guidline tips as to how achieve a perfect base for your makeup!!</p>
              <Youtube
               videoId = 'gg_-5HLkM5g'
               opts={opts}
               onReady={this.videoOnReady}
               />
               <p>Mari uses great tips and tricks for that flawless airbrush effect foundation
                 tricks.
               </p>
                <Youtube
               videoId = 'DCCmrRdf5vk'
               opts={opts}
               onReady={this.videoOnReady}
               />
               <p>Roxette is here to help with makeup tips that leave your skin looking flawless and 
                 ready for the day.
               </p>
               <Youtube
               videoId = 'hVaYg11MNJE'
               opts={opts}
               onReady={this.videoOnReady}
               />
               <p>James Charles as always is here to provide you with the best makeup base tricks that will
                 leave your skin looking flawless and photo ready.
               </p>
            </div>
          );
        }
      }
   export default BaseTips;