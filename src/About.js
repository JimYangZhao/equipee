import React from 'react';
import './About.scss';
import AboutusBanner from './components/banner/AboutusBanner';
import CTA_one from './components/call_to_action/About_page_cta_one';

function About() {
    return (
        <div className="About-page">
            <div className="banner">
                <AboutusBanner 
                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    title="About Page"
                    description="short description here"
                />
            </div>
            <div className="section row">
                <CTA_one
                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    title="About Page"
                    description="short description here"
                />
            </div>
        </div>
    )
}

export default About
