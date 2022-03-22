import React from 'react';
import "./ChannelRow.css";
import { Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelRow({image, channel, subs, noOfVideos, description, verified}) {
  return (
    <div className="channelRow">
        <Avatar className="channelRow__logo" alt={channel} src={image}/>
        <div className="channelRow__text">
            <h4>{channel} {verified && <CheckCircleIcon className="verIcon"/>} </h4>
            <span>{subs} subscribers • {noOfVideos} videos</span>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow