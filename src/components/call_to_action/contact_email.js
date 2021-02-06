import React from 'react';
import './contact_cell_email.scss';

function contact_email({icon, title, email, description, time, mailto}) {
    return (
        <div className="contact_cell_email row-vertical center">
            <img src={icon} alt='icon' />
            <span className="title">{title}</span>
            <a href={mailto}><span className="cell">{email}</span></a>
            <p className="description">{description}</p>
            <p className="time">{time}</p>
        </div>
    )
}

export default contact_email
// check
// {
//     email ? emial: render() / null;
// }   {/* Add check function , can be writed in*/}
