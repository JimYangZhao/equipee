import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <h1>Our Services</h1>
            
            </div>
            <div className='home__section'>
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

            <div className='home__section'>
            <h1>POPULAR EQUIPMENT RENTALS</h1>
            
            </div>

            <div className='home__section'>
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
            <div className='home__section'>
            <h1>More</h1>
            
            </div>
        </div>
    )
}

export default Home
