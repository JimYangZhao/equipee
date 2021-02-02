import React from 'react';
import './About_page_cta_one.scss';

function About_page_cta_one({src,title,description}) {
    return (
        <div className='about_page_cta_one'>
            <div className="left-area">
                <div className="outline">
                    <div className = "left-img">
                        <img src={src} alt="left_img" />
                    </div>
                </div>
            </div>
            <div className="right-text">
                <h1>{title}</h1>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default About_page_cta_one
