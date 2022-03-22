import React from 'react'
import ChannelRow from "./ChannelRow"
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
    </div>
  )
}

export default SearchPage