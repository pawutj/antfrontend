import React from 'react';
import WallBox from './wallbox.js'
import {urlValue} from "./util"
import './App.css'
const SubCommentBox =props =>{
    return (
        <div style = {{ transform: "scale(0.9)",marginLeft:"-20px",marginTop:"15px"}}>

            <WallBox url = {`${urlValue}/uploads/${props.filename}`} comment = {props.comment}/>

            
        </div>
    )
}

export default SubCommentBox