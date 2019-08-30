import React, { useState } from 'react';
import CommentBoxUpgrade from "./commentboxupgrade.js"
import WallBox from "./wallbox.js"
import Wall from "./wall.js"
import ReplayBoxUpgrade from "./replayboxupgrade.js"
import SubCommentBox from "./subcommentbox.jsx"
import './App.css'
import './index.css'
const Main = props => {
    const [postID,setPostID] = useState(-1)
    const [replayValue,setReplayValue] = useState([])
    return (
       <div style = {{backgroundColor:"#333333"}}>
       <div style = {{backgroundColor:"#333333",display:"flex",marginLeft:'auto',marginRight:"auto",flexDirection:"row",width:"90%"}}>
            <div style = {{backgroundColor:"#C4C4C4",width:"100%",height:"30px",margin:"10px"}}>
                <p style ={{fontSize:"14px",margin:"5px"}}>ANT VOICE VO.1</p>
            </div>
       </div>
       <div style = {{display:"flex",flexDirection:"row",minHeight:"100vh",backgroundColor : "#333333"}}>
        


            <div style = {{display:"flex",flexDirection:"column"}}>
                
            
            <div style = {{marginLeft:"60px"}}>
                
                <CommentBoxUpgrade  />
            </div>
                <Wall setPostID = {setPostID} setReplayValue = {setReplayValue}/>
                
            </div>
        
       
         <div style = {{display:"flex" , width:"510px",backgroundColor:"#3E3D3D",flexDirection:"column",paddingLeft:"30px",paddingTop:"15px",border:"1px solid #A99C9C"}}>
                <h2 style  = {{color:"white"}}>ตอบกลับเสียงนี้</h2>
                <ReplayBoxUpgrade id = {postID} />
                
                {replayValue.map(c => 
                <div>
                    <SubCommentBox filename = {c.filename} comment = {c.comment} />
                  
                </div>
                )}
        </div>
            </div>
            </div>
    )
}

export default Main