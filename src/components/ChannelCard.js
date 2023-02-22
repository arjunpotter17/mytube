import React, { useState } from 'react';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { allStorage } from '../utils/constants';

function ChannelCard({ channelDetail, marginTop, index }) {

    const channelString = JSON.stringify(channelDetail)
    let alreadySaved;
    const subbedArray = allStorage()

    

    
   if(subbedArray.includes(channelString)){
    alreadySaved = true;
   }
   else{
    alreadySaved = false;
   }
    
    

    const subPost = () =>{
        if(!alreadySaved){ 
            localStorage.setItem(`${channelDetail?.snippet?.title}`,channelString)
           window.location.reload()
        }
    }

    const unSub = () =>{
        localStorage.removeItem(`${channelDetail?.snippet?.title}`,channelString)
        window.location.reload()
    }

    

   


    return (
        <div className='channel-card' style={{ marginTop, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <div className='card-content'>
                    <img
                        src={`${channelDetail?.snippet?.thumbnails?.high?.url}` || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                    />
                    <h3>
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </h3>
                    {channelDetail?.statistics?.subscriberCount &&
                        <p>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers

                        </p>}
                    <h3 id='#subresult' style={{ display: 'none', color: '#fff' }}>Subscribed</h3>
                </div>
            </Link>
            <div>
            
            {alreadySaved && index ? (
                <button type='button' className='sub-button' onClick={(e) => {
                    e.stopPropagation();
                    unSub()
                }}>
                     Subscribed
                </button>
            ) : !alreadySaved && index?
                (<button
                    type='button'
                    className='sub-button'
                    onClick={(e) => {
                        e.stopPropagation();
                        subPost()
                    }}
                >
                    Subscribe
                </button>)
                :(<div></div>)
            }
        </div>
            
        
            
                
    </div >
  )
}

export { ChannelCard }

