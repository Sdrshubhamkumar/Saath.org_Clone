import React from 'react'
import './footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import facebook from '../../Assets/facebook.jpg';


const Footer = () => {
  return (
    <div className='footer'>
      
<footer>
<div className='footer-content'>

<div class="post-box1">
      <h3>Blog</h3>
      <hr></hr>

<div class="post">

{/* <img src="https://saath.org/wp-content/themes/saath/images/resource/recent-widget-bg1.jpg" alt="bg"></img> */}
<div class="recent-news-thumb">
<img alt="blog" src=" "></img>
</div>

<div class="rescecent-news-d">
<ul class="post-meta2">

<li><i class="far fa-calendar"></i>
<a  className="date" content="December-29-2014" href="https://saath.wordpress.com/2022/08/06/painting-the-young-minds-journey-at-saath/">18-08-2022</a>
</li>

</ul>

<a  class="post-discription" target="_blank" href="https://saath.wordpress.com/2022/08/18/getting-closer-to-social-work-this-summer/">"Getting closer to social work this summer"-Ghori Zeeshan Sanaullakhan</a>
</div>

</div>



<div class="post">

{/* <img src="https://saath.org/wp-content/themes/saath/images/resource/recent-widget-bg1.jpg" alt="bg"></img> */}
<div class="recent-news-thumb">
<img alt="blog" src="https://saath.org/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-08-at-1.07.05-PM-2.jpeg"></img>
</div>
<div class="rescecent-news-d">
<ul class="post-meta2">
<li><i class="far fa-calendar"></i>
<a  className="date" content="December-29-2014" href="https://saath.wordpress.com/2022/08/06/painting-the-young-minds-journey-at-saath/">06-08-2022</a>
</li>
</ul>
<a class="post-discription" target="_blank" href="https://saath.wordpress.com/2022/08/06/painting-the-young-minds-journey-at-saath/">''Painting the young minds journey at Saath'' - Shashi Kumar</a>
</div>
</div>

<div class="post">

{/* <img src="https://saath.org/wp-content/themes/saath/images/resource/recent-widget-bg1.jpg" alt="bg"></img> */}
<div class="recent-news-thumb">
<img alt="blog" src="https://saath.org/wp-content/uploads/2022/03/Kavya-Intern-2.jpg"></img>
</div>
<div class="rescecent-news-d">
<ul class="post-meta2">
<li><i class="far fa-calendar"></i>
<a  className="date" content="March 29,2022" href="https://saath.wordpress.com/2022/08/06/painting-the-young-minds-journey-at-saath/">March 29,2022</a>
</li>
</ul>
<a class="post-discription" target="_blank" href="https://saath.wordpress.com/2022/03/29/an-experience-to-be-cherished/">“An experience to be cherished”, Durga Kavya Ramkumar</a>
</div>
</div>
</div>


<div class="post-box2">
<div class="heading7">											
            <h3>Like Us On Facebook</h3>
        </div>

  
   <div className='facebook-blog'>
   <img className='facebook' src={facebook} alt='facebook'/>
   </div>


   <div class="heading7">											
            <h3>Like Us On Facebook</h3>
        </div>

        <div class="instagram">
            <a href="https://www.instagram.com/saathahmedabad/" target="_blank">
                <img   src="https://saath.org/wp-content/uploads/2022/02/icons8-instagram-64-2.png" alt="Instagram"></img><span className="instagram-tag"> Saath Ahmedabad</span>
            </a>
        </div>

</div>

</div>


</footer>

    </div>
  )
}

export default Footer
