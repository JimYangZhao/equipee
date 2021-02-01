import React from 'react';
import './Footer.scss';
import {Link } from "react-router-dom";

function Footer({src}) {
    return (
        <div className='footer'>
            <div className='social__info'>
                <a href="tel:18337746320" className="jss58">
                    <div className="jss63 sc-bdVaJa iIlWNp">
                        <img alt="" src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1/Icons/Footer/phone-call.png" />
                    </div>
                    <div className="jss62 sc-bdVaJa iIlWNp">
                        <div className="jss59 sc-bdVaJa iIlWNp">
                            1-833-774-6320
                        </div>
                        <div className="jss61 sc-bdVaJa iIlWNp">
                            Call us to speak to a DOZR Representative
                        </div>
                    </div>
                </a>
                <a href="mailto:contact@dozr.com" className="jss58">
                    <div class="jss63 sc-bdVaJa iIlWNp">
                        <img alt="" src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1/Icons/Footer/email.png" />
                    </div>
                    <div className="jss62 sc-bdVaJa iIlWNp">
                        <a className="jss59" href="mailto:contact@dozr.com">
                            Email Us
                        </a>
                        <div className="jss61 sc-bdVaJa iIlWNp">
                            We respond to all emails within 24 hours
                        </div>
                    </div>
                </a>
            </div>
            <div className="jss64 sc-bdVaJa iIlWNp"></div>
                <div className="footer-quicklink">
                    <img src={src} alt="" />
                    <div className="quick-lk">
                    <h2>Company</h2>
                    <ul>
                        <ol><Link to ='/About' >About us</Link></ol>
                        <ol><Link to ='./Careers' >Careers</Link></ol>
                        <ol><Link to ='./Contact' >Contact us</Link></ol>
                    </ul>
                    </div>
                    <div className="quick-lk">
                    <h2>Learn More</h2>
                    <ul>
                        <ol><Link to ='./Testimonials' >Customer Testimonials</Link></ol>
                        <ol><Link to ='./Privacy-Policy' >Privacy Policy</Link></ol>
                        <ol><Link to ='./Site-map' >Site Map</Link></ol>
                    </ul>
                    </div>
                </div>
            <div className="jss64 sc-bdVaJa iIlWNp"></div>
            <p>© 2021 Equipmee Comapny NL,  No rights reserved - this is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default Footer
