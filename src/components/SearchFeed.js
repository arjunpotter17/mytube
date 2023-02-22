
import React from 'react'
import { useState, useEffect } from 'react'

import {useParams} from 'react-router-dom';
import {Videos} from './Videos.js'
import {fetchFromAPI} from '../utils/API.js'

function SearchFeed() {

  const {searchTerm} = useParams();
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{setVideos(data.items); console.log('this is date',data)})
    console.log('first call',videos)
    
  },[searchTerm])
  return (
      <>
        <h3 id='search-result'>
        Results for 
        <span style={{color: '#f31503'}}> {searchTerm}</span>
      </h3>

      {videos && <Videos videos={[videos]}/>}
      </>
      
    
  )
}


export default SearchFeed