import React from 'react'
import './ShowcasePage.scss'
import Banner from '../../Components/Banner/Banner'
import Nav from '../../Components/Nav/Nav'

export const ShowcasePage = () => {
  return (
    <div>ShowcasePage
        <Nav/>
        <Banner 
        title='Check out some of my work!'
        subtitle='Feel free to look at my repos below!'
        />
    </div>
  )
}
