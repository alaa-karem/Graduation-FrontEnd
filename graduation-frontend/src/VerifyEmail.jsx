import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import './VerifyEmail.css';
import { TfiArrowLeft } from "react-icons/tfi";
import { PiTelegramLogoThin } from "react-icons/pi";


export default function VerifyEamil() {
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(true);

    const closeRegisterPopup = () => {
        setIsRegisterPopupOpen(false);
    };

    let navigate = useNavigate();

    function backVerifyEmail(){
        navigate('/forgot-password')
    }

    function verifyButton(){
        navigate('/reset-password')
    }

    return (
        <div>
            {isRegisterPopupOpen && (
                <Popup onClose={closeRegisterPopup} open={true} modal closeOnDocumentClick>
                    <div className='popup-container-verify'>
                        <div className='verify-password'>
                            <TfiArrowLeft className='icon-arrow-left-verifypassword' onClick={backVerifyEmail}/>
                            <p>Verify Your Email</p>
                        </div>
                        <div className='icon-verify-background'></div>
                        <PiTelegramLogoThin className='icon-verifypassword'/>

                        <div className='content-message-verifypassword'>
                            <p>Please, enter the 4-digit code sent to <br /> your email</p>
                        </div>

                        <div className='lines'>
                            <div className='l1'></div>
                            <div className='l2'></div>
                            <div className='l3'></div>
                            <div className='l4'></div>
                        </div>
                        <form action="" className='form-container-verify'>
                            <input type="text" className='input-one' autoFocus={false}/>
                            <input type="text" className='input-two'/>
                            <input type="text" className='input-three'/>
                            <input type="text" className='input-four'/>
                        </form>

                        <button onClick={verifyButton}  className='btn-verify-email'>Verify</button>
                    </div>
                </Popup>
            )}
        </div>
    );
}

