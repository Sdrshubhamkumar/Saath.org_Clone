import React, { useEffect,useState } from 'react'
import './homeBanner.css'
import SaathBannersWebsite2 from '../../../Assets/Saath-banners-Website-2.png'
import SaathBannersWebsite3 from '../../../Assets/Saath-banners-Website-3.png'
import HELPSUPPORTDAILYWEAGEARNERS4 from '../../../Assets/HELP_SUPPORT-DAILY-WAGE-EARNERS-4.png'
import HELPSUPPORTDAILYWEAGEARNERS8 from '../../../Assets/HELP_SUPPORT-DAILY-WAGE-EARNERS-8.png'

const HomeBanner = () => {

  const [index, setIndex] = useState(0)

  const data =  [SaathBannersWebsite2,SaathBannersWebsite3,HELPSUPPORTDAILYWEAGEARNERS4,HELPSUPPORTDAILYWEAGEARNERS8]

  const Handlenext = () => {
      setIndex(index === data.length-1 ? 0:index+1)
  }

  const Handlepre = () => {
    setIndex(index === 0 ? data.length-1:index-1)

  }

  useEffect(() => {

     const indexClear = setInterval(()=>{
      Handlenext()
    },6000)

    return () => clearInterval(indexClear)

  },[index])


  return (
    <div className='homeBanner'>
    <img className="Banner1" src={data[index]} alt='Saath-BannerWeb-siteLogo-2'/>
    
        <div className='left-btn'>
            <button onClick={Handlepre}>{"<"}</button>
        </div>
        <div className='right-btn'>
            <button onClick={Handlenext}>{">"}</button>
        </div>

        
       

    </div>
  )
}

export default HomeBanner
