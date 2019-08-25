import React, { Component,useState } from 'react'

import Recorder from 'react-mp3-recorder'
import ReactAudioPlayer from 'react-audio-player'
import {urlValue} from './util.js'
import blobToBuffer from 'blob-to-buffer'

import  axios, { post } from 'axios';
export default class ReplayBox extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
      file:null,
      comment:''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  commentChange(event) {
    this.setState({comment:event.target.value})
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);

      fetch(`${urlValue}/addComment`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filename:response.data.filename,
          path:response.data.path,
          comment:this.state.comment,
          id:this.props.id
        })
      }).then(response =>{
        console.log(response)
      })
      

    })
  }
  fileUpload(file){
    // const url = "http://localhost:3001/upload";
    const url = `${urlValue}/upload`
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }
  
  state = {
    url: '',
    
  }



  render () {
    const {
      url
    } = this.state

    return (
      <div >
     
          <div style ={{display:"flex",flexDirection:"row" }} > 
            <Recorder
              onRecordingComplete={this._onRecordingComplete}
              onRecordingError={this._onRecordingError}
              style={{}}
              
            />



<div style ={{display:"flex",flexDirection:"row",marginLeft:"10px"}}>
                <ReactAudioPlayer
                  src={url}
                  controls
                  style={{
                    width:"200px",
                    height:"20px",
                    marginTop:"10px"
                  }}
                />

          
             
              <form onSubmit={this.onFormSubmit} style = {{marginTop:"10px"}}>
                <button type="submit"  
                  style = {{width:"50px",backgroundColor:"#9F9F9F",boxShadow:"0px 4px 4px rbga(0,0,0,0.59),",borderRadius:"10px" ,height:"20px"}}  >
                    ยืนยัน</button>
              </form>
              </div>
            
          </div>
        </div>
      
    )
  }

  _onRecordingComplete = (blob) => {
    blobToBuffer(blob, (err, buffer) => {
      if (err) {
        console.error(err)
        return
      }

      console.log('recording', blob)

      if (this.state.url) {
        window.URL.revokeObjectURL(this.state.url)

      }

      this.setState({
        url: window.URL.createObjectURL(blob),
        file:blob
      })
    })
  }

  _onRecordingError = (err) => {
    console.log('error recording', err)

    if (this.state.url) {
      window.URL.revokeObjectURL(this.state.url)
    }

    this.setState({ url: null })
  }
}
