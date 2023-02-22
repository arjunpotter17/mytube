
import React from 'react';
import {ChannelCard} from './ChannelCard.js';
import {VideoCard}  from './VideoCard.js'

function Videos({videos, index, direction}) {
    console.log(videos)
    
    if(!videos?.length) return 'Loading...'
  return (
    <div className='video-feed' style={{flexDirection: direction}}>
        {index?videos?.map((item, idx)=>(
            <div className='content-box' key={idx}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </div>
            
        )):
        videos[0].map((item, idx)=>(
          <div className='content-box' key={idx}>
              {item.id.videoId && <VideoCard video={item}/>}
              {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </div>
          
      ))}
    </div>
    
  )
}

export  {Videos}