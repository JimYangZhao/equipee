/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './About.scss';
import AboutusBanner from './components/banner/AboutusBanner';
import CTA_one from './components/call_to_action/About_page_cta_one';
import CTA2 from './components/call_to_action/cta_two';
import Partners from './components/call_to_action/partners';

function About() {
    return (
        <div className="About-page">
            <div className="title_banner">
                <AboutusBanner 
                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    title="About Page"
                    description="short description here"
                />
            </div>
            <div className="section row">
                <CTA_one
                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    title="The Easiest Way to Rent Equipment"
                    description="DOZR is the largest online equipment rental marketplace offering equipment from suppliers ranging from large national rental houses to small regional rental companies. Contractors can search for equipment, compare pricing from their favourite suppliers and book instantly all under one Equipmee account.
                    "
                />
            </div>
            <div className="section">
                <CTA2 
                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    title="Equipment#3"
                    button="Learn More"
                />
            </div>
            <div className="section row partners">
                <div className="logos">
                    <Partners
                        src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    />
                    <Partners
                        src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    />
                    <Partners
                        src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    />
                    <Partners
                        src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    />
                </div>
                <div className="logos">
                    <Partners
                        src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    />
                    <Partners
                        src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    />
                    <Partners
                        src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    />
                    <Partners
                        src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    />
                </div>
            </div>
            <div className="section labels">
                <div className='row'>
                    <div className="center">
                        {/* Use UI Framework - Ant */}
                        <img
                            className="s4_row_img"
                            src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1570104917/Icons/homepage/dozr-advantage-price.svg"
                            alt=""
                        />
                        <h2>Price</h2>
                        <h3>We’ve secured the best rental rates in the industry from top quality suppliers so that you don’t have to.
                        </h3>
                        
                    </div>
                    <div className="center">
                        <img
                            className="s4_row_img"
                            src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1570104917/Icons/homepage/dozr-advantage-price.svg"
                            alt=""
                        />
                        <h2>Price</h2>
                        <h3>We’ve secured the best rental rates in the industry from top quality suppliers so that you don’t have to.
                        </h3>
                    </div>
                    <div className="center">
                        <img
                            className="s4_row_img"
                            src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1570104917/Icons/homepage/dozr-advantage-price.svg"
                            alt=""
                        />
                        <h2>Price</h2>
                        <h3>We’ve secured the best rental rates in the industry from top quality suppliers so that you don’t have to.
                        </h3>
                    </div>
                </div>
                <div className='row'>
                    <div className="center">
                        <img
                            className="s4_row_img"
                            src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1570104917/Icons/homepage/dozr-advantage-price.svg"
                            alt=""
                        />
                        <h2>Price</h2>
                        <h3>We’ve secured the best rental rates in the industry from top quality suppliers so that you don’t have to.
                        </h3>
                    </div>
                    <div className="center">
                        <img
                            className="s4_row_img"
                            src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1570104917/Icons/homepage/dozr-advantage-price.svg"
                            alt=""
                        />
                        <h2>Price</h2>
                        <h3>We’ve secured the best rental rates in the industry from top quality suppliers so that you don’t have to.
                        </h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About
