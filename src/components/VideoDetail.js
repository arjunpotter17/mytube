import React from 'react'
import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';

import {CheckCircle} from '@mui/icons-material';
import {Videos} from './Videos.js'
import {fetchFromAPI} from '../utils/API.js'

function VideoDetail() {

  const {id} = useParams();


  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0]))


    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  },[id])


  if(!videoDetail?.snippet) return 'Loading....'



  const {snippet:{title, channelId, channelTitle}, statistics:{
    viewCount, likeCount
  }} = videoDetail;
  //console.log(videos)
  return (
    <div className='video-page' minHeight='95vh'>
      <div class='video' direction={{xs:'column', md:'row'}}>
        <div style={{flex:1}}>
          <div className='video-box'>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player" controls/>
          <h2>
            {title}
          </h2>
          <div className='channel-info'>
            <Link to={`/channel/${channelId}`}>
              <h4>
                {channelTitle}
                <CheckCircle sx={{fontSize:'12px', color:'gray',
              ml:'5px'}}/>
              </h4>
            </Link>
            <div className='channel-stats' direction='row' gap='20px' alignItems='center'>
              <h4 variant='body1' sx={{opacity:0.7}}>
                {parseInt(viewCount).toLocaleString()} views
              </h4>
              <h4 variant='body1' sx={{opacity:0.7}}>
                {parseInt(likeCount).toLocaleString()} Likes
              </h4>
            </div>
          </div>
          </div>
        </div>
        <div className='video-feed suggested'>
            <Videos videos={videos} index={true}/>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail