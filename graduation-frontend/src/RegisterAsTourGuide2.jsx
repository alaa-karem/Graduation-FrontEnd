import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import './RegisterAsTourGuide2.css';
import { GoArrowLeft } from "react-icons/go";

export default function RegisterAsTourGuide2() {


    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(true);
    const closeRegisterPopup = () => {
        setIsRegisterPopupOpen(false);
    };

    let navigate = useNavigate();

    function continueYourJourneyTourGuide2(){
        navigate('/register-type');
    }

    function continueTourGuide2(){
        navigate('/register-as-tourguide-3')
    }

    return (
        <div>
            {isRegisterPopupOpen && (
                <Popup onClose={closeRegisterPopup} open={true} modal closeOnDocumentClick>
                    <div className='popup-container'>
                        {/* Left Section (Existing Form) */}
                        <div className='left-section-tourguide2'>
                            <div className='section-title-tourguide2'>
                                <GoArrowLeft className='icon-arrow-left-tourguide2' onClick={continueYourJourneyTourGuide2}/>         
                                <p>Continue Your Journey</p>
                            </div>
                            <div className='register-type-tourguide2'>
                                <p>Registeration Type</p>
                            </div>
                            <div className='personal-info-tourguide2'>
                                <p>Personal Info</p>
                            </div> 
                            <div className='account-info-tourguide2'>
                                <p>Account Info</p>
                            </div> 
                            <div className='sign-up-as-tourist2'>
                                <span>Sign Up As A </span>
                                <Link to='/register-as-tourist-2' className='Tourist'>Tourirst</Link>
                            </div>

                        </div>

                         {/* Right Section */}
                        <div className='right-section-tourguide2'>
                            <p className='are-you-tourguide'>Are You A Tour Guide?</p>
                            <div className='inputs-container-tourguide2'>
                                <form action="">
                                    <input className='firstname-input' id='firstname' name='first_name' placeholder='First Name' autoFocus={false} required/>
                                    <input className='lastname-input' id='lastname' name='last_name' placeholder='Last Name' autoFocus={false} required/>
                                    <input type='number' className='phonenumber-input' id='phonenumber' name='phone_number' placeholder='Phone Number' autoFocus={false} required/>
                                    <input className='birthdate-input' id='birthdate' name='birth_date' placeholder='Birthdate' autoFocus={false} required/>
                                </form>
                            </div>
                            <button onClick={continueTourGuide2} type='text' className='btn-continue-tourguide2 btn-outline-info'>Continue</button>
                        </div>

                    </div>
                </Popup>
            )}
        </div>
    )
}
