import React, { useState } from 'react';
import CommentBoxUpgrade from "./commentboxupgrade.js"
import WallBox from "./wallbox.js"
const Main = props => {
    return (
        <div>
            <CommentBoxUpgrade />
            <WallBox />
        </div>
    )
}

export default Main