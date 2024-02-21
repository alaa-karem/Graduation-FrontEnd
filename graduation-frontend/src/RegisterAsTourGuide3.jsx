import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import './RegisterAsTourGuide3.css';
import { GoArrowLeft } from "react-icons/go";

export default function RegisterAsTourGuide3() {


    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(true);
    const closeRegisterPopup = () => {
        setIsRegisterPopupOpen(false);
    };

    let navigate = useNavigate();

    function continueYourJourneyTourGuide3(){
        navigate('/register-as-tourguide-2');
    }

    function signupTest(){
        navigate('/home');
    }

    return (
        <div>
            {isRegisterPopupOpen && (
                <Popup onClose={closeRegisterPopup} open={true} modal closeOnDocumentClick>
                    <div className='popup-container'>
                        {/* Left Section (Existing Form) */}
                        <div className='left-section-tourguide3'>
                            <div className='section-title-tourguide3'>
                                <GoArrowLeft className='icon-arrow-left-tourguide3' onClick={continueYourJourneyTourGuide3}/>         
                                <p>Continue Your Journey</p>
                            </div>
                            <div className='register-type-tourguide3'>
                                <p>Registeration Type</p>
                            </div>
                            <div className='personal-info-tourguide3'>
                                <p>Personal Info</p>
                            </div> 
                            <div className='account-info-tourguide3'>
                                <p>Account Info</p>
                            </div> 
                            <div className='sign-up-as-tourguide3'>
                                <span>Sign Up As A </span>
                                <Link to='/register-as-tourist-2' className='Tour-Guide3'>Tourist</Link>
                            </div>

                        </div>

                         {/* Right Section */}
                        <div className='right-section-tourguide3'>
                            <p className='are-you-tourguide'>Are You A Tour Guide?</p>
                            <div className='inputs-container-tourguide3'>
                                <form action="">
                                    <input type='text' className='username-input' id='username' name='username' placeholder='User Name' autoFocus={false} required/>
                                    <input type='email' className='email-input' id='email' name='email' placeholder='Email' autoFocus={false} required/>
                                    <input type='password' className='password-input' id='password' name='password' placeholder='Password' autoFocus={false} required/>
                                    <input type='password' className='confirmpassword-input' id='confirmpassword' name='confirmpassword' placeholder='Confirm Password' autoFocus={false} required/>
                                </form>
                            </div>
                            <button onClick={signupTest} type='text' className='btn-continue-tourguide3 btn-outline-info'>Sign Up</button>
                        </div>

                    </div>
                </Popup>
            )}
        </div>
    )
}
