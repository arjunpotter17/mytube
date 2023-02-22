import React from 'react'
import { useState, useEffect } from 'react'
import {Sidebar} from './Sidebar.js'
import {Videos} from './Videos.js'
import {fetchFromAPI} from '../utils/API.js'
import {Subscriptions} from './Subscriptions'

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    if(selectedCategory === 'Home')
    {
      fetchFromAPI(`search?part=snippet&q=New`)
      .then((data)=>{setVideos(data.items)})
    }
    else if(selectedCategory !== 'Subscriptions')
    {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>{setVideos(data.items)})
    }
    
  
    
  },[selectedCategory])

 
  return (
    <div className='container'>
      <Sidebar selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}/>
      <div className='video-bar'>
          
          {<div>{selectedCategory === 'New' ?
            <h2>Home </h2>
            :
            <h2>{selectedCategory} </h2>}</div>
            
          }
          {selectedCategory === 'Subscriptions' && <Subscriptions/>}
          {selectedCategory !== 'Subscriptions' && <Videos videos={[videos]}/>}
        
      </div>
    </div>
  )
}

export default Feed