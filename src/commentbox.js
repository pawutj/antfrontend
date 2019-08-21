import React, { Component,useState } from 'react'

import Recorder from 'react-mp3-recorder'
import ReactAudioPlayer from 'react-audio-player'

import blobToBuffer from 'blob-to-buffer'

import  axios, { post } from 'axios';
export default class CommentBox extends Component {
  
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

      fetch('http://localhost:3001/addTopic', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filename:response.data.filename,
          tag:"DC",
          path:response.data.path,
          comment:this.state.comment
        })
      }).then(response =>{
        console.log(response)
      })
      

    })
  }
  fileUpload(file){
    const url = "http://localhost:3001/upload";
    // const url = "https://ec2-18-138-248-26.ap-southeast-1.compute.amazonaws.com:3001/upload"
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
      <div>
     

     
          <div style ={{display:"flex",flexDirection:"row"}}>
            <Recorder
              onRecordingComplete={this._onRecordingComplete}
              onRecordingError={this._onRecordingError}

            />


            {url && (
              <div style ={{display:"flex",flexDirection:"row",marginLeft:"10px"}}>
                <ReactAudioPlayer
                  src={url}
                  controls
                  style={{
                    minWidth: '500px'
                  }}
                />
            <br></br>
          
              <input placeholder ="Comment" style = {{margin:"10px",marginLeft:"10px"}}  onChange = {(e) => this.commentChange(e)} value = {this.state.comment}/>
              <form onSubmit={this.onFormSubmit} style = {{marginTop:"20px"}}>
                <button type="submit"  >Upload</button>
              </form>
              </div>

             

            )}
             
            
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
