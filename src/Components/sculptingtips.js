import React from 'react';
import '../App.css';
import Youtube from 'react-youtube';

class SculptingTips extends React.Component {

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
              <h1 className = "titles">Sculpting Tips</h1>
              <Youtube
               videoId = 'BEweWXa5Twk'
               opts={opts}
               onReady={this.videoOnReady}
               />
               <p>
               <h3 className = "titles"> How to Contour Your Face To the Gods</h3>
                 Christen shows exactly how to change you appearance with contouring and highlighting in
                 all the right places.
               </p>
                <Youtube
               videoId = 'Mv7F6Q6WLco'
               opts={opts}
               onReady={this.videoOnReady}
               />
               <p>
               <h3 className = "titles">5 Easy Tricks On Contouring</h3>
               Follow these 5 easy steps by InStyle on how to sculpt your face to get that snatched look.
               </p>
               <Youtube
               videoId = '4qsLJArkAe4'
               opts={opts}
               onReady={this.videoOnReady}
               />
               <p>
               <h3>For Beginners!!</h3>
               Tina is here to provide those who do not know how to sculpt their faces properly, with
                 help, just follow her tutorial for tips and tricks for beginners
               </p>
            </div> 
          );
        }
      }
   export default SculptingTips;