import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player';
import Youtube from 'react-youtube';
//import glammakeup1 from './glammakeup1'

class EyesTips extends React.Component {

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
              <h1>EyesTips</h1>
              <Youtube
               videoId = 'io3WdVxwi_Y'
               opts={opts}
               onReady={this.videoOnReady}
               />
               <p>
                 <h3>Tips For Hooded Eyes!!</h3>
                 1. Line your upper lid only with a fine-point eyeliner pen.<br></br>
                 2. Blend colors light to dark at an upward angle.<br></br>
                 3. Prime your eyes to minimize transfer.<br></br>
                 4. Keep the hood light.<br></br>
                 5. Give your brows some attention.<br></br>
                 6. Contour your cheeks to lengthen your eyes.<br></br>
                 7. Use white eyeliner to make eyes look bigger.<br></br>
                 8. Add some shadow to your under-eye.<br></br>
                 9. Don’t be afraid of new styles!<br></br>

               </p>
                <Youtube
               videoId = '37lrPDfZiIs'
               opts={opts}
               onReady={this.videoOnReady}
               />
               <p>
                 <h3>What To DO and What NOT To Do When It Comes To Eyeshadow!!</h3>
                 1. Always Use A Primer<br></br>
                 Your main goal is to make sure that we have a clear and smooth skin before applying eyeshadow.<br></br>
                 2. Know Your Transition Shades<br></br>
                 Never use a densely hard brush to apply an eyeshadow in your crease.
                 Do not start off with a dark shadow, this will make it look very harsh.<br></br>
                 3. Add Dimension<br></br>
                 Matte eyeshadows with darker shade will help us achieve dimension.
                 Use a small precision brush that is tapered on the end.<br></br>
                 4. Use Your Blending Brush Correctly<br></br>
                 Do not use a densely packed and dome-shaped brush.
                 Don't hold the brush too close to the handle as it will make it difficult for you to blend.<br></br>
                 5. Pay Attention To Your Lower Lashline<br></br>
                 Use a lighter color on your lower lash line.
                 Many women are tempted to use a darker line of shadow on their lower lash line, but that just tends to create a harsh look.
                 Instead, opt for a little lighter color than the one you are wearing on your upper lids.<br></br>
                 6. Highlighting<br></br>
                 Too much product and too much glittery is a No-no!
                 Use a matte tone color to create highlight and transition.<br></br>
                 7. Setting Makeup<br></br>
                 Always do your eye shadows before you set your face makeup.<br></br>
                 8. The Final Finish<br></br>
                 Finish it up with some nice waterproof, smudge-proof eyeliner.
               </p>
               <Youtube
               videoId = 'BKgAAl9hb4A'
               opts={opts}
               onReady={this.videoOnReady}
               />
               <p>
                 <h3>Glam MakeUp!!</h3>
                 Glam Makeup is perfect for those special occassions whene you just want to look
                 that little bit extra. Follow the tutorial above for a warm golden brown eyelook
                 that will guarantee people staring and wondering where you got them skills from.
               </p>
            </div>
          );
        }
      }
   export default EyesTips;