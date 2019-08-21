import React, { useState } from 'react';
import CommentBoxUpgrade from "./commentboxupgrade.js"
import WallBox from "./wallbox.js"
import Wall from "./wall.js"
const Main = props => {
    return (
    
        <div style = {{backgroundColor : "#515151",minHeight:"100vh",display:"flex",flexDirection:"column"}}>
            
         

            <div style = {{backgroundColor:"#C4C4C4" ,margin:"10px"}}>
            <CommentBoxUpgrade />
            </div>
            <Wall style = {{}}/>
            
        </div>
    
    )
}

export default Main