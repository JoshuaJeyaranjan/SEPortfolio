import React from 'react'

const Banner = ({title, subtitle})=> {
  return (
    <div className='banner'>

        <h1 className="banner__title"> {title} </h1>
        <h4 className='banner__subtitle'> {subtitle} </h4>
    
    </div>
  )
}

export default Banner