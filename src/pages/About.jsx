import React from 'react';
import Marquee from "react-fast-marquee"
import { Link } from 'react-router-dom';
import './css/about.css'
import about_body_image from '../components/asset/about-body-image.jpg'
import about_video from '../components/asset/about-video.mp4'

const About = () => {
    return (
        <div className='about'>
           <div className='about-banner'>
              <h1>#Know Us</h1>
            </div>
            <div className="about-body">
                <div className="about-details">
                   <img src={about_body_image} alt="" />
                   <div>
                   <h2>Who are we?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam? Libero adipisci expedita vel alias eius. Necessitatibus ex eos dolor excepturi mollitia beatae non ut suscipit voluptatibus optio. Optio, alias!
                    Vero repellat doloribus magnam vel quisquam ipsam tenetur voluptatem. Consequatur, quas odio itaque at eaque ab porro praesentium delectus, dolore provident vel quibusdam ratione soluta asperiores aliquam maiores enim numquam?
                    </p>
                    <abbr title="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt cupiditate incidunt sit molestias laborum ab perspiciatis, voluptatum provident exercitationem, alias, quasi repudiandae animi totam. Commodi aspernatur maxime fugiat iste?
                    </abbr>
                    <br />
                    <br />
                   </div>
                </div>
                <Marquee  pauseOnHover className='marquee'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam quidem blanditiis dicta.
                </Marquee>
                <div className="about-app">
                    <h1>Download Our <Link to='/'>App</Link></h1>
                    <div className="video">
                        <video src={about_video} autoPlay muted loop></video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;