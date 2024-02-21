import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import './RegisterAsTourist2.css';
import { GoArrowLeft } from "react-icons/go";

export default function RegisterAsTourist2() {


    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(true);
    const closeRegisterPopup = () => {
        setIsRegisterPopupOpen(false);
    };

    let navigate = useNavigate();

    function continueYourJourneyTourist2(){
        navigate('/register-type');
    }

    function continueTourist2(){
        navigate('/register-as-tourist-3')
    }

    return (
        <div>
            {isRegisterPopupOpen && (
                <Popup onClose={closeRegisterPopup} open={true} modal closeOnDocumentClick>
                    <div className='popup-container'>
                        {/* Left Section (Existing Form) */}
                        <div className='left-section-tourist2'>
                            <div className='section-title-tourist2'>
                                <GoArrowLeft className='icon-arrow-left-tourist2' onClick={continueYourJourneyTourist2}/>         
                                <p>Continue Your Journey</p>
                            </div>
                            <div className='register-type-tourist2'>
                                <p>Registeration Type</p>
                            </div>
                            <div className='personal-info-tourist2'>
                                <p>Personal Info</p>
                            </div> 
                            <div className='account-info-tourist2'>
                                <p>Account Info</p>
                            </div> 
                            <div className='sign-up-as-tourguide2'>
                                <span>Sign Up As A </span>
                                <Link to='/register-as-tourguide-2' className='Tour-Guide'>Tour Guide</Link>
                            </div>

                        </div>

                         {/* Right Section */}
                        <div className='right-section-tourist2'>
                            <p className='are-you-tourist'>Are You A Tourist?</p>
                            <div className='inputs-container-tourist2'>
                                <form action="">
                                    <input className='firstname-input' id='firstname' name='first_name' placeholder='First Name' autoFocus={false} required/>
                                    <input className='lastname-input' id='lastname' name='last_name' placeholder='Last Name' autoFocus={false} required/>
                                    <input type='number' className='phonenumber-input' id='phonenumber' name='phone_number' placeholder='Phone Number' autoFocus={false} required/>
                                    <input className='birthdate-input' id='birthdate' name='birth_date' placeholder='Birthdate' autoFocus={false} required/>
                                </form>
                            </div>
                            <button onClick={continueTourist2} type='text' className='btn-continue-tourist2 btn-outline-info'>Continue</button>
                        </div>

                    </div>
                </Popup>
            )}
        </div>
    )
}
