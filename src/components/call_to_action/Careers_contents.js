import React from 'react';
import '../../Careers.scss'

function Careers_contents({title, subtitle, description, src, alt}) {
    return (
        <div className="careers_contents">
            <div className="title">
                <h2><strong>{title}</strong></h2>
            </div>
            <div className="description">
                <h2>{subtitle}</h2>
                <p>{description}</p>
                <div className="center picture">
                    <img src={src} alt={alt} />
                    <p>{alt}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Careers_contents
