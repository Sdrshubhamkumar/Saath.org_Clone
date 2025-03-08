import React from 'react'
import './topNavThree.css'

const TopNavThree = () => {
  return (
    <div className='topNavThree'>
        <ul>
        <li><a href="https://saath.org/">Home</a></li>
        <li class="menu-item-has-children"><a href="#">About</a></li>
        <li><a href="https://saath.org/funders-partners/">Funders & Partners</a></li>
        <li class="menu-item-has-children"><a href="https://saath.org/programs/">Sectors</a></li>
        <li><a href="https://saath.org/awards-and-recognition/">Awards</a></li>
        <li class="menu-item-has-children"><a href="#">Resources</a> </li>
        <li><a href="https://saath.org/get-involved/">Get Involved</a></li>
        <li><a href="https://saath.org/corporate-social-responsibility-at-saath/">CSR</a></li>
        <li><a href="https://saath.org/innovations/">Innovations</a></li>
        <li><a href="https://saath.org/impact/">impact</a></li>
         </ul>
                    
    </div>
  )
}

export default TopNavThree
