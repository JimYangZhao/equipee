import React from 'react'
import './cta_two.scss'
import { Button } from "@material-ui/core";

function cta_two({ src, title,button }) {
    return (
        <div className="cta_two">
            <div className="row contents">
                <div className="left-empty"></div>
                <div className="right-text-button">
                    <h2>{title}</h2>
                    <Button variant='outlined'>{button}</Button>
                </div>
            </div>
        </div>
    )
}

export default cta_two
