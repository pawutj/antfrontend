import React, { useState, useEffect } from 'react';
import WallBox from "./wallbox.js"
import ReplayBox from "./replaybox"
import {urlValue} from "./util.js"
const Wall = ({setPostID}) =>{
    
    const [wallValue,setWallValue] = useState([])
    const [postValue,setPostValue] = useState(-1)
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
                wallValue.map( (c,i) => (
                    <div style = {{...{width:"640px",height:"120px",margin:"2px",borderRadius:"10px",display:"flex"},...{border:i==postValue?"1px solid #FFF8F8":"1px solid #3E3D3D"} }}>
                    <WallBox url = {`${urlValue}/uploads/${c.filename}`} id = {c.id} replay = {c.replay} comment = {c.comment}/>
                    <div>
                    <button style = {{backgroundColor:"#000000",color:"#FFFFFF",borderRadius:"10px",marginTop:"33px"}} onClick = {e => {
                        setPostValue(i)
                        setPostID(c.id)
                            }} >
                                <p style = {{fontSize:"10px"}}>COMMENT...</p></button>
                    </div>
                    </div>
                ))
            }
            </div>
          </div>
          </div>


    )
}

export default Wall

