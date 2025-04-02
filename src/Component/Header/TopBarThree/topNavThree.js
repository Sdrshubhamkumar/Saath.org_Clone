import React from 'react'
import './topNavThree.css'
import {Link} from 'react-router-dom';


const TopNavThree = () => {
  return (
    <div className="resp-nav">
    
     <div class="burger">
  <div className="menu-toggle"> &#8801;</div> 
        </div> 
    
    <div className='topNavThree'>


        <ul className='hidden-navbar'>
        <li><Link to={'/'}>Home</Link></li>
        <li class="menu-item-has-children"><a href="#">About</a>
              <ul>
                  <li><Link to={'About/profile'}>Profile</Link></li>
                  <li><a href="/#">Board Of Trustees</a></li>
                  <li><a href="/#">Governance</a></li>
                  <li><a href="/#">History</a></li>
                  <li><a href="/#">Saath Institutional Partners</a></li>
              </ul>
          </li>
        <li><a href="https://saath.org/funders-partners/">Funders & Partners</a></li>
        <li className="menu-item-has-children"><a href="https://saath.org/programs/">Sectors</a></li>
        <li><a href="https://saath.org/awards-and-recognition/">Awards</a></li>
        <li className="menu-item-has-children"><a href="#">Resources</a> </li>
        <li><a href="https://saath.org/get-involved/">Get Involved</a></li>
        <li><a href="https://saath.org/corporate-social-responsibility-at-saath/">CSR</a></li>
        <li><a href="https://saath.org/innovations/">Innovations</a></li>
        <li><a href="https://saath.org/impact/">impact</a></li>
         </ul>
              
    </div>
    </div>
    
  )
}

export default TopNavThree
