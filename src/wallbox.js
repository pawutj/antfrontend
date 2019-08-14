import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player'
const WallBox = props => {
    const url = "http://localhost:3001/uploads/file-1565806741054"
    return (
        <div>
             <ReactAudioPlayer
                  src={url}
                  controls
                  style={{
                    minWidth: '500px'
                  }}
                />
        </div>
    )
}

export default WallBox