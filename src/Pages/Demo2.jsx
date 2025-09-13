import React from 'react'
import {useState} from 'react'

const Demo2 = () => {
  const [formData, setFormData]=useState({
    destination:'',
    rooms:'',
    adults:'',
    children:'',
    travelingFor:'',
    searchFor:''

  }
  

  )
  const handleChange=(e) =>{
    console.log(e)
    const{name,value}=e.target
    setFormData(
      {
        ...formData,
        [name]:value
      }
    )
  }
  console.log(formData)

  const handleSubmit=(e) =>{
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  }
  return (
     <div className="container2">
      <h1 className="main-title">Work, Leisure & Everything in Between</h1>
      <p className="subtitle">Whoever you are, whatever you seek, it all starts here.</p>

      <form className="form"  onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="destination">
          Destination, property name or address:
        </label>
        <input
          className="form-input" 
          type="text"
          id="destination" name='destination' value={formData.searchTerm} onChange={handleChange}
          placeholder="Enter the place where you want to go"
        />

        <div className="guest-row">
          <div className="guest-group">
            <label htmlFor="rooms"  className="guest-label">Rooms</label>
            <select id="rooms" name='rooms' value={formData.searchTerm} onChange={handleChange} className="guest-select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="guest-group">
            <label htmlFor="adults" className="guest-label">Adults</label>
            <select id="adults"name='adults' value={formData.searchTerm} onChange={handleChange} className="guest-select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="guest-group">
            <label htmlFor="children" className="guest-label">Children</label>
            <select id="children" name='children' value={formData.searchTerm} onChange={handleChange} className="guest-select">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>

        <div className="radio-row">
          <span className="radio-title">Traveling for:</span>
          <label className="radio-label">
            <input type="radio"
              name='travelingFor'
              value='work'
              checked={formData.travelingFor === 'work'}
               onChange={handleChange} 
             />
            Work
          </label>
          <label className="radio-label">
            <input type="radio"
            name="travelingFor"
            checked={formData.travelingFor === 'leisure'}
            value= 'leisure'
           onChange={handleChange}  />
            Leisure
          </label>
        </div>

        <div className="radio-row">
          <span className="radio-title">Search for:</span>
          <label className="radio-label">
            <input type="radio" 
            name="searchFor" 
             value='all Properties'
             checked={formData.searchFor === 'all Properties'}
             onChange={handleChange}
             />
            All Properties
          </label>
          <label className="radio-label">
            <input type="radio" name="searchFor"
             value= 'hotels'
             checked={formData.searchFor === 'hotels'}
             onChange={handleChange} />
            Hotels
          </label>
          <label className="radio-label">
            <input type="radio" 
            name="searchFor"
             value='Homes and Apartments' 
             checked={formData.searchFor === 'Homes'}
             onChange={handleChange}  />
            Homes & Apartments
          </label>
        </div>

        <button className="search-btn" type="submit">SEARCH</button>
      </form>
    </div>
      
    
  )
}
export default Demo2

