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
      <span><h3>Blog</h3></span>
      {/* <hr></hr> */}

<div class="post">

{/* <img src="https://saath.org/wp-content/themes/saath/images/resource/recent-widget-bg1.jpg" alt="bg"></img> */}
<div class="recent-news-thumb">
<img alt="blog" src="https://saath.org/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-08-at-1.07.05-PM-2.jpeg "></img>
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
            {/* <hr></hr> */}
        </div>

  
   <div className='facebook-blog'>
   <img className='facebook' src={facebook} alt='facebook'/>
   </div>


   <div class="heading7">											
            <h3>Like Us On Instagram</h3>
        </div>

        <div class="instagram">
            <a href="https://www.instagram.com/saathahmedabad/" target="_blank">
                <img   src="https://saath.org/wp-content/uploads/2022/02/icons8-instagram-64-2.png" alt="Instagram"></img>
                <span className="instagram-tag"> Saath Ahmedabad</span>
            </a>
        </div>

</div>

<div class="contact-detail">
<div class="heading7">											
            <h3>Contect Us</h3>
            {/* <hr></hr> */}
        </div>
    <span class="contact">
        <i class="fa fa-globe"></i>
        <span>
            Saath Charitable Trust<br></br>
            0/102, Nandanvan V,<br></br>
            Nr. Prernatirth Derasar,<br></br>
            Jodhpur Tekra, Satellite,<br></br>
            Ahmedabad-380015, Gujarat, India
        </span>
    </span>
    
    <span class="contact">
        <i class="fa fa-envelope"></i>
        <span>
            <a href="mailto:mail@saath.org">mail@saath.org</a>
        </span>
    </span>

    <span class="contact">
        <i class="fa fa-phone"></i>
        <span>+91-79-35164684</span>
    </span>   

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3672.109864158185!2d72.517641!3d23.019738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc1e05ff4a246bd3!2sSaath+Charitable+Trust!5e0!3m2!1sen!2s!4v1455538805452" class="imap"></iframe>                                         
</div>



</div>
<div class="bottom-line">



<span>Copyright © 2016 Saath.<span><br/></span> <a href="https://www.siliconinfo.com" title="Leading Website Development Company Silicon Valley Infomedia" target="_blank">Website Design And Development</a> By Silicon Valley</span>
                       


</div>

</footer>

    </div>
  )
}

export default Footer
