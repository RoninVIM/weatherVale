import React from 'react'
import { useState } from 'react'



const SearchBar = ({setSearchInpit}) => {
    const [search, setSearch] = useState("")

    const searchHandleChange = (e) =>{
        e.preventDefault()
        setSearchInpit(search)
    }

    return (
    <form onSubmit={searchHandleChange} className='my-1'>
        <input  onChange={e => {
            setSearch(e.target.value)
            
             }} value={search} placeholder='Search for cities' className='bg-input-color w-full p-2 rounded-lg text-white'/>    
    </form>
    )
    }

export default SearchBar