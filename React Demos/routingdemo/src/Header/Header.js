import React from 'react'

import { Link } from "react-router-dom";
export default function () {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Contact Manager</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link active">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addcontact" className="nav-link active">Add Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link active">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
