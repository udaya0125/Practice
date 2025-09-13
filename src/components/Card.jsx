import React from 'react'

const Card = () => {
  return (
    <section className="Cards">
        <div className='Card'>
            <h2>Discover the best <br />
                stores near you</h2>
        <div className='country'>NORWAY<svg  xmlns="http://www.w3.org/2000/svg"  width="24" 
         height="24"  viewBox="0 0 24 24" 
          fill="none"  stroke="currentColor" 
           stroke-width="2"  stroke-linecap="round"  
           stroke-linejoin="round"
             class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 9l6 6l6 -6" />
                </svg> 
                </div>
        </div>
        <div className='Card'>
            <h2>Resources</h2>
            <div className='card-content'>
                Do you know what could beat the <br />
                exciting feeling of having a new <br />
                computer? Make Your own PC!
            </div>
        </div>
        <div className='Card'>
            <h2>
                +5K tools for you <br />
                to choose from
            </h2>
            <button className='learn-more-btn'>Learn more</button>
        </div>
        
    </section>
  )
}

export default Card
