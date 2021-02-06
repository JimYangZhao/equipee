import React from 'react';
import './contact_cell_email.scss';

function contact_cell({icon, title, cell, description, time, tel}) {
    return (
        <div className="contact_cell_email row-vertical center">
            <img src={icon} alt='icon' />
            <span className="title">{title}</span>
            <a href={tel}><span className="cell">{cell}</span></a>
            <p className="description">{description}</p>
            <p className="time">{time}</p>
        </div>
    )
}

export default contact_cell
// check
// {
//     email ? emial: render() / null;
// }   {/* Add check function , can be writed in*/}
