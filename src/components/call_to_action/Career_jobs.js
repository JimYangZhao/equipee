import React from 'react';
import './Career_jobs.scss'

function Career_jobs({job_cat, job_position, link}) {
    return (
        <div className="Career_jobs">
            <h3>{job_cat}</h3>
            <span className="job_position"><a href={link}>{job_position}</a></span>
        </div>
    )
}

export default Career_jobs
