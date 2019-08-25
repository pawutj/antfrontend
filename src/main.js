import React, { useState } from 'react';
import CommentBoxUpgrade from "./commentboxupgrade.js"
import WallBox from "./wallbox.js"
import Wall from "./wall.js"
import ReplayBoxUpgrade from "./replayboxupgrade.js"
const Main = props => {
    const [postID,setPostID] = useState(-1)
    return (
        <div style = {{display:"flex",flexDirection:"row",minHeight:"100vh",backgroundColor : "#333333"}}>
        
            <div style = {{display:"flex",flexDirection:"column"}}>
                
            
            <div style = {{marginLeft:"60px"}}>
                
                <CommentBoxUpgrade  />
            </div>
                <Wall setPostID = {setPostID}/>
                
            </div>
        
       
         <div style = {{display:"flex" , width:"510px",backgroundColor:"#3E3D3D",flexDirection:"column",paddingLeft:"30px",paddingTop:"15px"}}>
                <h2 style  = {{color:"white"}}>ตอบกลับเสียงนี้{postID}</h2>
                
                <ReplayBoxUpgrade />
        </div>
            </div>
    )
}

export default Main