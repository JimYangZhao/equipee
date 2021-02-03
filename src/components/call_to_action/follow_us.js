import React from 'react';
import './follow_us.scss'

function follow_us({ins, facebook, linkedin, twitter}) {
    return (
        <div className="section follow_us row-vertical center">
            <h1>FOLLOW US ON SOCIAL MEDIA</h1>
            <div className="section icons row">
                <a href={ins}><img src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/f_auto/v1570218415/logos/dozr-instagram.png" alt="ins" /></a>
                <a href={facebook}><img src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/f_auto/v1570218415/logos/dozr-facebook.png" alt="facebook" /></a>
                <a href={linkedin}><img src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1570218415/logos/dozr-linkedin.png" alt="linkedin" /></a>
                <a href={twitter}><img src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/f_auto/v1570218415/logos/dozr-twitter.png" alt="twitter" /></a>
            </div>
        </div>
    )
}

export default follow_us
