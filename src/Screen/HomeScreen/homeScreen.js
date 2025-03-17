import React from 'react'
import './homeScreen.css'
import HomeBanner from './HomeBanner/homeBanner'
import HomeContent from './HomeBanner/homeContent'
import HomeSector from './HomeBanner/homeSector'
import Footer from '../../Component/Footer/footer'


const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <HomeBanner/>
      <HomeContent/>
      <HomeSector/>
      <Footer/>
    </div>
  )
}

export default HomeScreen
