import React from 'react'
import './topNavOne.css'
import '@fortawesome/fontawesome-free/css/all.min.css';




const TopNavOne = () => {
  return (
    <div className='topNavOne'> 

    
<div className='EnquireNow'>
    <a class='Enquire'href="#">Enquire Now</a>
    </div>
    
    <ul className="social-btn">
        <li><a href="https://www.facebook.com/saathahmedabad" target="_blank" rel="nofollow"><i className="fab fa-facebook"></i></a></li>
        <li><a href="https://saath.wordpress.com/" target="_blank" rel="nofollow"><i className="fab fa-wordpress"></i></a></li>
        {/* <li><a href="https://twitter.com/saathahmedabad" target="_blank" rel="nofollow"><i className="fab fa-twitter"></i></a></li> */}
        <li><a href="https://www.linkedin.com/company/saath-charitable-trust" target="_blank" rel="nofollow"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="https://www.youtube.com/user/SaathNGO" target="_blank" rel="nofollow"><i className="fab fa-youtube"></i></a></li>
        <li><a href="https://www.instagram.com/saathcharitabletrust/" target="_blank" rel="nofollow"><i className="fab fa-instagram"></i></a></li>
      </ul>
</div>

  
  )
}

export default TopNavOne
