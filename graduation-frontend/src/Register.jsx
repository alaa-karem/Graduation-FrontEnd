import React from 'react'
import { Link , Outlet } from 'react-router-dom' 
export default function Register() {
    return (
        <div className='container'>
        <div className='row'>
            <div className='col-md-5'>
                <ul>
                    <li>
                        <Link to="register-as-tourist">Register As A Tourist</Link>
                    </li>
                    <li>
                        <Link to="register-as-tourguide">Register As A TourGuide</Link>
                    </li>
                </ul>
            </div>

            <div className='col-md-5'>
                <Outlet></Outlet>
            </div>

        </div>
    </div>
    )
}