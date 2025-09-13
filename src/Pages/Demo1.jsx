import React from 'react'
import { useState } from 'react'
const Demo1 = () => {
    const [searchTerm , setSearchTerm ]= useState('')
    const [location , setLocation]= useState('')


    const [formData , setFormData] = useState({
        searchTerm: '',
        location: ''
    })


    const handleChange = (e) => {
        console.log(e)
        const { name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })

    }

    console.log(formData) 
  return (
    <div className='search'> 
        <div className='search-box'>
            <input name='searchTerm' value={formData.searchTerm} onChange={handleChange} type="text" placeholder='Search Keyword' 
            
            />    
            <label for='location'></label>
            <select value={formData.location}  name='location' onChange={handleChange} id='location'>
                <option value="Online Jobs in Bergen">Online Jobs in Bergen</option>
                <option value="Online Jobs in Stanvanger">Online Jobs in Stavanger</option>
                <option value="locOnline Jobs in Tronsa">Online Jobs in Tronsa</option> 
            </select>
                    
            <button className='btn' >Search</button>
        </div>
    
    </div>
  )
}

export default Demo1
