import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="cities" to="cities">Cities</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="car-rental">CarRental</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="plan-a-trip">Plan-Trip</Link>
                        </li>
                        
                    </ul>

                    <ul className="navbar-nav  mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="search">
                            <FontAwesomeIcon icon={faSearch} />
                            </Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="register-type">Register</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="cities" to="login">Login</Link>
                        </li>
                        
                    </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}






