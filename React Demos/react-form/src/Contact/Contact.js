import React from 'react'

export default function Contact(props) {
    return (
        <div className="col-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.fname} {props.lname}</h5>
                    <p className="card-text">{props.email}</p>
                    <p className="card-text">{props.phone}</p>
                </div>
            </div>
        </div>
    )
}
