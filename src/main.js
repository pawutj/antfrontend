import React, { useState } from 'react';
import CommentBoxUpgrade from "./commentboxupgrade.js"
import WallBox from "./wallbox.js"
import Wall from "./wall.js"
const Main = props => {
    return (
    
        <div style = {{backgroundColor : "#333333",minHeight:"100vh",display:"flex",flexDirection:"column"}}>
            
         
        <div style = {{marginLeft:"60px"}}>
            
            <CommentBoxUpgrade />
        </div>
            <Wall style = {{}}/>
            
        </div>
    
    )
}

export default Main