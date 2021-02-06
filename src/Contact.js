/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './Contact.scss';
import Contact_form from './components/call_to_action/contact_form';
import ContactBanner from './components/banner/AboutusBanner';
import Contact_cell from './components/call_to_action/contact_cell';
import Contact_email from './components/call_to_action/contact_email';
import Follow_us from './components/call_to_action/follow_us';

function Contact() {
    return (
        <div className="contact">
            <div className="title_banner">
                <ContactBanner 
                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    title="Contact Page"
                    description="short description here"
                />
            </div>
            <div className="section form center">
                <Contact_form
                    title="QUESTIONS? SEND A MESSAGE"
                />
                <h2>Form will be made later</h2>
            </div>
            <div className="section center row-vertical">
                <h1>NEED TO TALK TO A HUMAN RIGHT NOW?</h1>
                <div className="row container">
                    <div className="cell_info">
                        <Contact_cell 
                            icon="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/f_auto/w_200/v1570451621/Icons/1pnt/phone-dark.png"
                            title="Phone Call"
                            cell="1 - 709 -774 - 6320"
                            description="Skip the Wait. Call us to speak with a Equipmee representative now."
                            time="Mon - Fri 8am - 5pm EST"
                            tel="tel:709999999"
                        />
                    </div>
                    <div className="email_info">
                        <Contact_email 
                            icon="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/f_auto/w_200/v1570451621/Icons/1pnt/phone-dark.png"
                            title="Email Us"
                            email="info@equipmee.com"
                            description="Skip the Wait. Email us to speak with a Equipmee representative now."
                            time="Mon - Fri 8am - 5pm EST"
                            mailto="mailto:info@equipmee.com"
                        />
                    </div>
                </div>
                <div className="follow_us">
                        <Follow_us 
                            ins="#"
                            facebook="#"
                            linkedin="#" 
                            twitter="#"
                        />
                </div>
            </div>
        </div>
    )
}

export default Contact
