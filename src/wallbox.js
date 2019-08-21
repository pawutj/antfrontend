import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player'
import ReplayBox from './replaybox'
const WallBox = props => {
  const [commentOn, setCommentOn] = useState(false);
    return (
      <div>
        <div>
          {/* <p>ID {props.id}</p> */}
          <div onClick = {() => setCommentOn(!commentOn)}>
          <div style = {{backgroundColor:"#EEEEEE" ,height:"30px",paddingLeft:"20px",width:"300px",marginLeft:"50px"}}>
          <p>{props.comment}</p>
          </div>
        
         <div style = {{}}>
             <div style = {{backgroundColor:"#C4C4C4",width:"520px"}}>
             <ReactAudioPlayer
                  src={props.url}
                  controls
                  style={{
                    width:"500px",
                    height:"50px"
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
                 src={ `http://localhost:3001/uploads/${t.filename}`}
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
        
    )
}

export default WallBox