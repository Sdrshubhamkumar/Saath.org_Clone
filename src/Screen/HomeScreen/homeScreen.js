import React from 'react'
import './homeScreen.css'
import HomeBanner from './HomeBanner/homeBanner'
import HomeContent from './HomeBanner/homeContent'


const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <HomeBanner/>
      <HomeContent/>
      
    </div>
  )
}

export default HomeScreen
