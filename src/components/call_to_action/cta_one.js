import React from 'react'
import './cta_one.scss'

function cta_one({ src, title, description }) {
    return (
        <div className="cta_one">
            <div className="row contents">
                <div className="left-text">
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                </div>
                <div className="right-img">
                    <img src={src} alt="" />
                </div>
            </div>
        </div>
    )
}

export default cta_one
