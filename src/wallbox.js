import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player'
import ReplayBox from './replaybox'
import {urlValue} from './util.js'
import './App.css'
import './index.css'
import ant1 from './img/1.png'
import ant2 from './img/2.png'
const WallBox = props => {
  const [commentOn, setCommentOn] = useState(false);
    return (
      <div>
        <div>
          {/* <p>ID {props.id}</p> */}
          <div style = {{display:"flex"}}>
            
            <div  style = {{width:"80px",height:"80px",position:"absolute",backgroundColor:`${props.ant==1?"#F6EEEE":"#000000"}`,borderRadius: "80px" ,marginTop:"15px",marginLeft:"10px"}}>
              {
              props.ant==1?  
              <img  src = {ant1} width = {"50px"} style = {{marginTop:"30px",marginLeft:"10px"}}/>:
        
              <img  src = {ant2} width = {"50px"} style = {{marginTop:"15px",marginLeft:"15px"}}/>
              
              }
            </div>
            <div style = {{marginLeft:"100px"}}>
          <div style = {{backgroundColor:"#F6EEEE" ,height:"20px",paddingLeft:"20px",width:"300px",borderRadius:"10px",marginLeft:"30px",marginTop:""}}>
          <p>{props.comment}</p>
          </div>
        
         <div style = {{backgroundColor:"#F6EEEE",padding:"3px",borderRadius:"3px"}}>
             <div style = {{}}>
             <ReactAudioPlayer
                  src={props.url}
                  controls
                  style={{
                    width:"420px",
                    height:"23px"
                  }}
                />
              
            </div>
            </div>
            </div>
               {commentOn&&
                 props.replay.map( t =>(
                 <div style = {{display:"flex",flexDirection:"column",marginLeft:"70px"}}>
                   <div style = {{backgroundColor:"#EEEEEE" ,height:"30px",padding:"0px",width:"250px",marginLeft:"30px"}}>
                   <p>{t.comment} </p>
                   </div>
                 <ReactAudioPlayer
                 src={ `${urlValue}/uploads/${t.filename}`}
                 controls
                 style={{
                   width: '400px'
                 }}
                 
               />
               
               </div> 
               
              ))
              }
</div>

            {commentOn&&
              <div style = {{backgroundColor:"#C4C4C4" ,margin:"10px"}}>
              <ReplayBox id = {props.id}/>
              </div>
            }  
           
           </div>
            </div>
        
    )
}

export default WallBox