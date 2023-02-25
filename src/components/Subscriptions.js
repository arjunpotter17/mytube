import React from 'react'
import { ChannelCard } from './ChannelCard.js'
import { allStorage } from '../utils/constants.js'
import SubbedChannel from './SubbedChannel.jsx';

function Subscriptions() {

  const key = 'key'
  const subbedArray = allStorage(key);
  
  



  return (
    <div className='subbed-channels'>
      {subbedArray !== []? (subbedArray.map( item => (
    <SubbedChannel key={item?.id?.channelId} channelDetail={item}/>
   ))):(<p style={{color:'white'}}>No Subscriptions to show</p>)}
    </div>



  )
}

export { Subscriptions }