import React, { useState } from 'react';
import ReplayBox from "./replaybox.js"

const ReplayBoxUpgrade = props =>{
    
    const [storyAgg,setStoryAgg] = useState("")

    return (
      

        <div style ={{margin:"10px",width:"450px",height:"120px",backgroundColor:"#A5A5A5",border:"1px solid #A99C9C",borderRadius:"10px",boxSizing:"border-box"}}>
            
            <div style = {{width:"80px",height:"80px",position:"absolute",backgroundColor:"#F6EEEE",borderRadius: "100px" , marginLeft:"-30px" ,marginTop:"20px" }}


            ></div>

            <div style ={{display:"flex",flexDirection:"row",height:"25px",marginTop:"20px",marginLeft:"60px"}}>
                <input placeholder ="เรื่องย่อ" style = {{width:"300px",boxShadow:"0px 4px 4px rgba(0,0,0,0.59)",backgroundColor:"#F6EEEE",borderRadius:"10px"}}
                  onChange = {(e) => setStoryAgg(e.target.value)} value = {storyAgg}/> 
                <button style = {{width:"50px",backgroundColor:"#9F9F9F",boxShadow:"0px 4px 4px rbga(0,0,0,0.59),",borderRadius:"10px"}}>ยืนยัน</button>
            </div>
            <div style = {{marginLeft:"60px",marginTop:"10px"}}>
            <ReplayBox />
            </div>
            </div>
 

    )
}

export default ReplayBoxUpgrade