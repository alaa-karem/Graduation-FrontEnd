import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import { TfiArrowLeft } from "react-icons/tfi";
import { PiTelegramLogoThin } from "react-icons/pi";
import { MdKey } from "react-icons/md";
import { IoKeyOutline , IoMailOutline } from 'react-icons/io5'; 

export default function ResetPassword() {
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(true);

    const closeRegisterPopup = () => {
        setIsRegisterPopupOpen(false);
    };

    let navigate = useNavigate();

    function backResetPassword(){
        navigate('/verity-email')
    }

    function resetButton(){
        navigate('/home')
    }

    return (
        <div>
            {isRegisterPopupOpen && (
                <Popup onClose={closeRegisterPopup} open={true} modal closeOnDocumentClick>
                    <div className='popup-container-reset'>

                        <div className='reset-password'>
                            <TfiArrowLeft className='icon-arrow-left-resetpassword' onClick={backResetPassword}/>
                            <p>Reset Your Password</p>
                        </div>
                        <div className='icon-reset-background'></div>
                        <MdKey className='icon-resetpassword'/>
                        
                        <form action="" className='form-resetpassword'>
                            <input type="password" className='input-reset-new-pass' placeholder='         New Password'/>
                            <IoKeyOutline className='icon-reset-new-pass' /> 
                            <input type="password"  className='input-reset-confirm-pass' placeholder='       Confirm Password'/>
                            <IoKeyOutline className='icon-reset-confirm-pass' /> 
                        </form>


                        <button onClick={resetButton}  className='btn-resetpassword'>Reset Password</button>
                    </div>
                </Popup>
            )}
        </div>
    );
}

