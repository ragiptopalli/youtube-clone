import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <span>FILTERS</span>
        </div>
        <hr/>

        <ChannelRow
            image="https://avatars.githubusercontent.com/u/18445276?s=400&u=29523099e2b0638fc6f84eea6f8df7c6585b40c9&v=4"
            channel="Ragip Topalli"
            verified
            subs="3.2M"
            noOfVideos={129}
            description="Casual YouTube Channel!"
        />
        <hr />

        <VideoRow 
          views="24M"
          subs="534K"
          description="Lyrics: In the nighttime When the world is at it's rest You will find me in a place I know the best Dancin', shoutin' Flyin' to the..."
          timestamp="8 years ago"
          channel="Paul Kalkbrenner"
          title="Paul Kalkbrenner - Sky and Sand (Official Music Video)"
          image="https://i.ytimg.com/vi/8ybFb_wKlvQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBNxobxlegjGNZ32u6uDqIuDt9P2g"
        />
    </div>
  )
}

export default SearchPage