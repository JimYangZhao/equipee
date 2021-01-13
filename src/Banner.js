import React, {useState} from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <h1>Show Date Picker</h1>}
                <Button onClick={() =>setShowSearch(!showSearch)} className='banner_searchButton' variant='outlined'>
                    Search Dates
                </Button>
            </div>
            <div className='banner_info'>
                <h1>Get out and strech you imagination</h1>
                <h5>
                    Plan a different kind of get away to uncover the hidden gems near you
                </h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner