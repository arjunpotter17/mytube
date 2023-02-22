import React from 'react'
import {Link} from 'react-router-dom'

import {CheckCircle} from '@mui/icons-material'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constants'

function VideoCard({video:{id:{videoId}, snippet}}) {
  
  return (
    <div className='video-container'>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
       
          <img src={`${snippet?.thumbnails?.high?.url}`}
          alt={snippet?.title} />
        
      </Link>
      <div className='video-description' sx={{ backgroundColor: '#000', height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
        <h4>
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </h4>
        </Link>

        <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
        <h5>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
        </h5>
        </Link>
      </div>
    </div>
  )
}

export  {VideoCard}