/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './Careers.scss'
import CareersBanner from './components/banner/AboutusBanner';
import Careers_contents from './components/call_to_action/Careers_contents';
import Career_jobs from './components/call_to_action/Career_jobs';

function Careers() {
    return (
    <div className="careers">
        <div className="title_banner">
            <CareersBanner 
                src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                title="Career Page"
                description="short description here"
            />
        </div>
        <div className="contents">
            <div className="section">
            <Careers_contents 
                title="Career Page"
                subtitle="Subtitle"
                description="short description here"
                src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                alt="image description"
            />
            <Careers_contents 
                title="Career Page"
                subtitle="Subtitle"
                description="short description here"
                src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                alt="image description"
            />
            <Careers_contents 
                title="Career Page"
                subtitle="Subtitle"
                description="short description here"
                src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                alt="image description"
            />
            <div className="center">            
                <button>Check Out Blogs From the DOZR Team</button>
            </div>
            </div>
            <div className="border-top"></div>
            <div className="section">
                <Careers_contents 
                    title="Career Opportunities With Equipmee"
                    subtitle="Subtitle"
                    description="We are always looking for bright, growth-oriented individuals to join our team. If this sounds like you, please email a copy of your resume and cover letter to us below.
                    "
                />
                <button>Apply Now</button>
            </div>
            <div className="section">
                <Career_jobs 
                    job_cat="Customer Success Team"
                    job_position="Customer Service Representative"
                    link="#"
                />
                <Career_jobs 
                    job_cat="Customer Success Team"
                    job_position="Customer Service Representative"
                    link="#"
                />
                <Career_jobs 
                    job_cat="Customer Success Team"
                    job_position="Customer Service Representative"
                    link="#"
                />
            </div>
        </div>

    </div>
    )
}

export default Careers
