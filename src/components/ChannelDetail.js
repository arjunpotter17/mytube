import React from 'react'
import {useState, useEffect} from 'react';
import {Videos} from './Videos';
import {ChannelCard} from './ChannelCard'
import { fetchFromAPI } from '../utils/API';
import {useParams} from 'react-router-dom';
import {useContext} from 'react'
import {Subcontext} from '../context/Subcontext.js'

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos,setVideos] = useState([])
  const {id} = useParams();
  const context = useContext(Subcontext)


  
  useEffect(()=>{
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  },[id])


  return (
    <div className='channel-container'>
      <div className='profile-images'>
        <div className='background-gradient'>
        </div>
        <div className='profile-pic'>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' index={true}/>
        </div>
      </div>

      <div className='video-bar' style={{
        marginTop: '2.5em'
      }}>
        
          <Videos videos={videos} index={true}/>
        
      </div>
    </div>
  )
}

export default ChannelDetail