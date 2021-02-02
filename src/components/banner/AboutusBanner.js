import React from 'react';
import './AboutusBanner.scss'

function AboutusBanner({src, title, description} ) {
    const banner = {
        backgroundImage: src,
      };
    return (
        <div className="Aboutus-banner" style={{banner}}>
                <div className="title_description">
                    <h1>{title}</h1>
                    <h4>{description}</h4>
                </div>
        </div>
    )
}

export default AboutusBanner
