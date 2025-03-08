import React from 'react'
import './topNavTwo.css'
import logo from '../../../Assets/logo.png'
const TopNavTwo = () => {
  return (
    <div className='topNavTwo'>

    <div className='topNavOneLogo'>
    <img className='logo' src={logo} alt='SaathLogo'/>
    </div>

    <div class="quick-contact">
        <ul>
            <li>
                 <img src="https://saath.org/wp-content/themes/saath/images/resource/phone-dark.png" alt="phone" />
                 <span class='mail'> 079-35164684</span>
             </li>
             <li>
                <img src="https://saath.org/wp-content/themes/saath/images/resource/sms-dark.png" alt="sms" />
                 <span ><a href="mailto:mail@saath.org" class='mail'>mail@saath.org</a></span>
             </li>
             <li>
                <a href="https://saath.org/donate-now/" class="theme-btn">DONATE NOW</a>
             </li>
             </ul>
     </div>

    </div>
  )
}

export default TopNavTwo
