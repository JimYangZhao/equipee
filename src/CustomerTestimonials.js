import React from 'react'
import './CustomerTestimonials.scss'
import CustomerTestimonialsBanner from './components/banner/AboutusBanner';
import CustomerT1 from './components/blog/CustomerT1'

function CustomerTestimonials() {
    return (
        <div className="CustomerTestimonials">
            <div className="title_banner">
                <CustomerTestimonialsBanner 
                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    title="Blog Page"
                    description="short description here"
                />
            </div>
            <div className="section bg-light-yellow minih">
                <CustomerT1 
                    title="Customer Testimonials"
                />
            </div>
            <div className="section minih">
                <CustomerT1 
                    title="More on Equipmee"
                />
            </div>
        </div>
    )
}

export default CustomerTestimonials
