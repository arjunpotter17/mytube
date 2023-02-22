import React from 'react'
import { Link } from 'react-router-dom';

const SubbedChannel = ({key, channelDetail}) => {
  return (
    <div className='subbed-channel-container'>
        <div className='image-name-container'>
            <img src={channelDetail?.snippet?.thumbnails?.high?.url} id='channel-logo' alt ='channel-logo'/>
            <div >
            <p style={{textAlign:'center'}}>{channelDetail?.snippet.title}</p>
            <h3>{channelDetail?.statistics?.subscriberCount} subscribers</h3>
            </div>
            
        </div>
        <div>
            <Link to={`/channel/${channelDetail?.id}`}>
            <button className='sub-button'>Visit Channel</button>
            </Link>
            
        </div>
    </div>
  )
}

export default SubbedChannel