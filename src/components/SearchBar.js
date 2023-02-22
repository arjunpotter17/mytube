import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Search} from '@mui/icons-material'


function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
        }
    }

  return (
    
    <form className='searchbar-form' onSubmit={handleSubmit}>
        <input
            className='searchbar'
            placeholder='Search'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            
        />
        <button type='Submit' id='search-svg'>
            <Search/>
        </button>
    </form>
  )
}

export {SearchBar}