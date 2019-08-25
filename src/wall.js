import React, { useState, useEffect } from 'react';
import WallBox from "./wallbox.js"
import ReplayBox from "./replaybox"
import {urlValue} from "./util.js"
const Wall = props =>{
    
    const [wallValue,setWallValue] = useState([])
    useEffect (() => {
        fetch(`${urlValue}/topicList`)
            .then(response => response.json())
            .then(data => {console.log(data)
            setWallValue(data)
            })
    },[])
    return (
        <div style ={{width:"680px", backgroundColor:"#3E3D3D",marginLeft:"70px"}}>
        
            <div style = {{display:"flex",width:"100%"}}>
           <div style = {{marginLeft:"auto"}}>
            {
                wallValue.map( c => (
                    <div style = {{width:"640px",height:"120px",margin:"2px",border:"1px solid #FFF8F8",borderRadius:"10px"}}>
                    <WallBox url = {`${urlValue}/uploads/${c.filename}`} id = {c.id} replay = {c.replay} comment = {c.comment}/>
                    </div>
                ))
            }
            </div>
          </div>
        </div>
    )
}

export default Wall