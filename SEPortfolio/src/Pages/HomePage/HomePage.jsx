import React from 'react'
import './HomePage.scss'
import Nav from '../../Components/Nav/Nav'  
import Banner from '../../Components/Banner/Banner'

function HomePage() {
  return (
    <div>
      <Nav/>
      <Banner
      title='Hi my name is Josh!'
      subtitle='Welcome to my Software Portfolio'
      />

    </div>
  )
}

export default HomePage