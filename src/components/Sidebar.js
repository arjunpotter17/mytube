import React from 'react'
import {categories} from '../utils/constants'



function Sidebar({selectedCategory, setSelectedCategory}) {

    const handleclick = (categoryName) =>{
        
        setSelectedCategory(categoryName)
    }

  return (
    <div className='sidebar'>
        {categories.map((category=>(
            <button className='category-btn' style={{
                background: category.name === selectedCategory && 'var(--accent-color)',
                color:category.name === selectedCategory &&  'white'
            }}
            onClick = {()=>handleclick(category.name)}
            key={category.name}>
                <span id='category-icon' style={{
                    color:category.name===selectedCategory? 'white':'black',
                    marginRight:'0.5em'
                }}>{category.icon}</span>
                <span id="category-name">{category.name}</span>
            </button>
        )))}
        
    </div>
  )
}

export  {Sidebar}