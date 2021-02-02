import React from 'react';
import './Home.scss';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import CTA1 from './components/call_to_action/cta_one';
import CTA2 from './components/call_to_action/cta_two';
import Partners from './components/call_to_action/partners';


// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section__1'>
                <div className='section'> 
                    <h1>Our Services</h1>
                        <div className='row'> 
                        <Card
                            src="http://equipmee.com/wp-content/uploads/2021/01/Wheel-loader-495x400.jpg"
                            title="Service#1"
                            description="An ecommerce solution for rental companies to enable touchless online bookings with customers."
                        />
                        <Card
                            src="http://equipmee.com/wp-content/uploads/2021/01/volvo-find-soil-compactor-sd135b-t4f-walkaround-1000x1000-1-495x400.jpg"
                            title="Service#2"
                            description="An ecommerce solution for rental companies to enable touchless online bookings with customers."
                        />
                        <Card
                            src="http://equipmee.com/wp-content/uploads/2021/01/PC210LC-11_1-495x375.png"
                            title="Service#3"
                            description="An ecommerce solution for rental companies to enable touchless online bookings with customers."
                        />
                        </div>
                </div>
            </div>
            <div className='home__section__2'>
                <div className='section'> 
                    <h1>POPULAR EQUIPMENT RENTALS</h1>
                        <div className='row'>
                        <Card
                            src="http://equipmee.com/wp-content/uploads/2021/01/Gehl-845x684.jpg"
                            title="Equipment#1"
                            description="An ecommerce solution for rental companies to enable touchless online bookings with customers."
                            price="$130/day"
                        />
                        <Card
                            src="http://equipmee.com/wp-content/uploads/2021/01/CM20180928-35976-27789-495x400.jpeg"
                            title="Equipment#2"
                            description="An ecommerce solution for rental companies to enable touchless online bookings with customers."
                            price="$350/day"
                        />
                        <Card
                            src="http://equipmee.com/wp-content/uploads/2021/01/3cx-02-1000-495x400.jpg"
                            title="Equipment#3"
                            description="An ecommerce solution for rental companies to enable touchless online bookings with customers."
                            price="$70/day"
                        />
                        </div>
                </div>
            </div>
            <div className='home__section__3'>
                <div className='title'> 
                    <h1>EQUIPMEE FOR SUPPLIERS</h1>
                </div>
                <div className='contents'> 
                    <div className='contents__left'>
                        <img
                            className="left_img"
                            src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601584926/Icons/homepage/Web_Store_Powered_by_DOZR.png"
                            alt=""
                        />
                    </div>
                    <div className='contents__right'>
                        <div className='contents__title'> 
                            <h2>Introducing</h2>
                            <h1>EQUIPMEE FOR SUPPLIERS</h1>
                            <h3>POWERED BY EQUIPMEE</h3>
                        </div>
                        <div className='contents__description'>
                            <p>
                            An ecommerce solution for rental companies to enable touchless online bookings with customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home__section__4'>
                <div className='title'> 
                    <h1>EQUIPMEE FOR CONTRACTORS</h1>
                </div>
                <div className='section'>
                        <div className='row'>
                            <div>
                                <img
                                    className="s4_row_img"
                                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1570104917/Icons/homepage/dozr-advantage-price.svg"
                                    alt=""
                                />
                                <h2>Price</h2>
                                <h3>We’ve secured the best rental rates in the industry from top quality suppliers so that you don’t have to.
                                </h3>
                            </div>
                            <div>
                                <img
                                    className="s4_row_img"
                                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1570104917/Icons/homepage/dozr-advantage-price.svg"
                                    alt=""
                                />
                                <h2>Price</h2>
                                <h3>We’ve secured the best rental rates in the industry from top quality suppliers so that you don’t have to.
                                </h3>
                            </div>
                            <div>
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
                            <div>
                                <img
                                    className="s4_row_img"
                                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/q_auto:eco/v1570104917/Icons/homepage/dozr-advantage-price.svg"
                                    alt=""
                                />
                                <h2>Price</h2>
                                <h3>We’ve secured the best rental rates in the industry from top quality suppliers so that you don’t have to.
                                </h3>
                            </div>
                            <div>
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
            <div className='home__section__5'>
                <CTA1 
                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    title="Equipment#3"
                    description="An ecommerce solution for rental companies to enable touchless online bookings with customers."
                />
                <CTA2 
                    src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
                    title="Equipment#3"
                    button="Learn More"
                />
            </div>
            <div className='home__section__6'>
                    <h1>Corporate Partners</h1>
                
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
            
        </div>
    )
}

export default Home
