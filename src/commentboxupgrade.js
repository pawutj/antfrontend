import React, { useState } from 'react';
import CommentBox from "./commentbox"
import './App.css'
import './index.css'
import ant from './img/1.png'
const CommentBoxUpgrade = props => {
    const [storyAgg,setStoryAgg] = useState("")
    return (
        <div style ={{margin:"10px",width:"750px",height:"200px",backgroundColor:"#333333",border:"1px solid #A99C9C",borderRadius:"10px",boxSizing:"border-box"}}>
            
            <div style = {{width:"150px",height:"150px",position:"absolute",backgroundColor:"#F6EEEE",borderRadius: "100px" , marginLeft:"-50px" ,marginTop:"20px" }}
            >
                 <img src={ant} width = "120px" style = {{marginTop:"50px",marginLeft:"10px"}}/>;
            </div>

            <div style ={{display:"flex",flexDirection:"row",height:"40px",marginTop:"50px",marginLeft:"120px"}}>
                <input placeholder ="เรื่องย่อ" style = {{width:"500px",boxShadow:"0px 4px 4px rgba(0,0,0,0.59)",backgroundColor:"#F6EEEE",borderRadius:"10px"}}
                  onChange = {(e) => setStoryAgg(e.target.value)} value = {storyAgg}/> 
                <button style = {{width:"90px",backgroundColor:"#9F9F9F",boxShadow:"0px 4px 4px rbga(0,0,0,0.59),",borderRadius:"10px"}}>ยืนยัน</button>
            </div>
            <div style = {{marginLeft:"120px",marginTop:"10px"}}>
            <CommentBox storyAgg = {storyAgg} />
            </div>
        </div>
    )
}

// const css = {
//     width:"750px",
//     height:"200px",
// }

export default CommentBoxUpgrade