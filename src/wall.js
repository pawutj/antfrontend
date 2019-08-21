import React, { useState, useEffect } from 'react';
import WallBox from "./wallbox.js"
import ReplayBox from "./replaybox"
const Wall = props =>{
    
    const [wallValue,setWallValue] = useState([])
    useEffect (() => {
        fetch('http://localhost:3001/topicList')
            .then(response => response.json())
            .then(data => {console.log(data)
            setWallValue(data)
            })
    },[])
    return (
        <div style ={{width:"100%"}}>
        
            <div style = {{display:"flex",width:"100%"}}>
           <div style = {{marginLeft:"auto",marginRight:"auto",width:"60%"}}>
            {
                wallValue.map( c => (
                    
                    <WallBox url = {`http://localhost:3001/uploads/${c.filename}`} id = {c.id} replay = {c.replay} comment = {c.comment}/>
                ))
            }
            </div>
          </div>
        </div>
    )
}

export default Wall