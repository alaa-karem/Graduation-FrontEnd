import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import { TfiArrowLeft } from "react-icons/tfi";
import { AiFillLock } from "react-icons/ai";


export default function RegisterType() {
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(true);

    const closeRegisterPopup = () => {
        setIsRegisterPopupOpen(false);
    };

    let navigate = useNavigate();

    function backForgotPassword(){
        navigate('/login')
    }
    
    function btnAction(){
        navigate('/verity-email')
    }

    return (
        <div>
            {isRegisterPopupOpen && (
                <Popup onClose={closeRegisterPopup} open={true} modal closeOnDocumentClick>
                    <div className='popup-container'>
                        <div className='forgot-password'>
                            <TfiArrowLeft className='icon-arrow-left-forgotpassword' onClick={backForgotPassword}/>
                            <p>Forgot Your Password?</p>
                        </div>

                        <div className='icon-background'></div>
                        <AiFillLock className='icon-forgotpassword'/>
                        <div className='content-message'>
                            <p>Please, enter your email address <br /> to reset your password</p>
                            
                        </div>

                        <input className='email-forgotpassword' id='forgotpassword' name='email' placeholder='    Email' autoFocus={false} required/>

                        <button onClick={btnAction} className='reset-password'>Reset Password</button>
                    </div>
                </Popup>
            )}
        </div>
    );
}

