import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
// import HomKeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={HomeOutlinedIcon} title="Home"/>
      <SidebarRow Icon={WhatshotOutlinedIcon} title="Explore"/>
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions"/>
      <hr />      
      <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library"/>
      <SidebarRow Icon={HistoryIcon} title="History"/>
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
      <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch later"/>
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
    </div>
  )
}
export default Sidebar