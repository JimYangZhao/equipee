import { render } from 'node-sass';
import React from 'react';
import './contact_cell_email.scss';

function contact_cell_email({icon, title, cell, email, description, time}) {
    return (
        <div className="contact_cell_email row-vertical center">
            <img src={icon} alt='icon' />
            <span className="title">{title}</span>
            <a href="tel:709999999"><span className="cell">{cell}</span></a>
            <a href="mailto:info@equipmee.com"><span className="cell">{email}</span></a>
            <p className="description">{description}</p>
            <p className="time">{time}</p>
        </div>
    )
}

export default contact_cell_email
// check
// {
//     email ? emial: render() / null;
// }   {/* Add check function , can be writed in*/}
