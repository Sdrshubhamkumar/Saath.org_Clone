import React from 'react'
import './secondbar.css'
import NavBarTwo from './NavBarTwo/topNavTwo';
import TopNavThree from './TopBarThree/topNavThree';

const SecondBar = () => {
  return (
    <div className='secondbar'>
      <NavBarTwo/>
      <TopNavThree/>
    </div>
  )
}

export default SecondBar