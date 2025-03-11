import React from 'react'
import './homeScreen.css'
import HomeBanner from './HomeBanner/homeBanner'
import HomeContent from './HomeBanner/homeContent'
import HomeSector from './HomeBanner/homeSector'


const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <HomeBanner/>
      <HomeContent/>
      <HomeSector/>
    </div>
  )
}

export default HomeScreen
