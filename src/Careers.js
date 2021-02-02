import React from 'react'
import './Careers.scss'
import CareersBanner from './components/banner/AboutusBanner';


function Careers() {
    return (
    <div className="careers">
        <div className="banner">
        <CareersBanner 
            src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
            title="Career Page"
            description="short description here"
        />
        </div>
    </div>
    )
}

export default Careers
