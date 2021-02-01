import React from 'react'
import './partners.scss'

function partners({title,src}) {
    return (
        <div className="partners">
            <div className="logos">
                <img src={src} alt="" />
            </div>
            
        </div>
    )
}

export default partners
