import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import touristImage from './images/tourist.jpg'
import tourguideImage from './images/tour-guide.jpg';
import './RegisterType.css';
import { GoArrowLeft } from "react-icons/go";


export default function RegisterType() {
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(true);

    const [selectedUserType, setSelectedUserType] = useState('');

    const closeRegisterPopup = () => {
        setIsRegisterPopupOpen(false);
    };

    let navigate = useNavigate();
    
    function continueButton(){
        if (selectedUserType === 'tourist') 
        {
            navigate('/register-as-tourist-2')
        } else if (selectedUserType === 'tourGuide') 
        {
            navigate('/register-as-tourguide-2')
        } else 
        {
            alert("Please select a user type!");
        }
    };

    return (
        <div>
            {isRegisterPopupOpen && (
                <Popup onClose={closeRegisterPopup} open={true} modal closeOnDocumentClick>
                    <div className='popup-container'>
                        {/* Left Section (Existing Form) */}
                        <div className='left-section'>
                            <div className='section-title'>
                                {/* <GoArrowLeft className='icon-arrow-left'/>          */}
                                <p>Continue Your Journey</p>
                            </div>
                            <div className='register-type'>
                                <p>Registeration Type</p>
                            </div>
                            <div className='personal-info'>
                                <p>Personal Info</p>
                            </div> 
                            <div className='login-already'>
                                <span>Already have an account?</span>
                                <Link to='/login' className='ms-1'>Login now</Link>
                            </div>


                        </div>

                        {/* Right Section */}
                        <div className='right-section'>
                            <p className='register-as'>Register As</p>
                            <div className='line'></div>
                            <div className='photos-container'>
                                <div className='photo-container'>
                                    <div className='photo'>
                                        <img src={tourguideImage} alt='Tour-Guide-Image' />
                                    </div>
                                    <div className='photo-details'>
                                        <input onChange={() => setSelectedUserType('tourGuide')} type='radio' name='userType' value='tourGuide' id='tourGuide' />
                                        <label htmlFor='tourGuide'>Tour Guide</label>
                                    </div>
                                </div>
                                <div className='photo-container'>
                                    <div className='photo'>
                                        <img src={touristImage} alt="Tourist-Image" />
                                    </div>
                                    <div className='photo-details'>
                                        <input onChange={() => setSelectedUserType('tourist')} type='radio' name='userType' value='tourist' id='tourist'/>
                                        <label htmlFor='tourist'>Tourist</label>
                                    </div>
                                </div>
        
                            </div>
                            <button onClick={continueButton} type='text' className='btn-text btn-outline-info'>Continue</button>
                        </div>
                
                        

                    </div>
                </Popup>
            )}
        </div>
    );
}



/*

import  Axios  from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Resigter() {


    let navigate = useNavigate();

    const [errorList, setErrorList] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [error , setError] = useState('');   // if registration failed

    const [user, setUser] = useState({
        first_name:'',
        last_name:'',
        age:0,
        email:'',
        password:''
    })
    function getUserData(e){
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        // console.log(myUser);
    }
    
    async function submitRegisterForm(e){
        e.preventDefault();
        setIsLoading(true);

        let validationResult = validateRegisterFrom();
        
        if(validationResult.error.details)
        {
            setErrorList(validationResult.error.details);
            setIsLoading(false);
        }
        else
        {
            let {data} = await Axios.post('https://route-egypt-api.herokuapp.com/signup', user);
            
            setIsLoading(false);

            if(data.message === 'success')
            {
                setIsLoading(false);
                //Navigato login || Home
                navigate('/login');
            }
            else
            {
                setIsLoading(false);
                setError(data.message);
            }
        }

    }

    function validateRegisterFrom(){
        let scheme = Joi.object({
            first_name: Joi.string().alphanum().min(3).max(10).required(),
            last_name: Joi.string().alphanum().min(3).max(10).required(),
            age: Joi.number().min(16).max(80).required(),
            email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        })

        return scheme.validate(user, {abortEarly:false}); // علشان ماتقفش عند أول ايرور و تكمل و تجيب كل الايرورز
    }


    
    return (
        <>
            <div className='w-75 mx-auto'>
                <h2>Register now</h2>
                {errorList.map((error, i)=> i=== 4? <div className='alert py-2 alert-danger'>paassowrd invalid</div>:<div className='alert py-2 alert-danger'>{error.message}</div>)}
                {error.length > 0 ? <div className='alert alert-danger'>{error}</div> : '' }
                
                <form onSubmit={submitRegisterForm}>
                    <label htmlFor="first_name" >first_name:</label>
                    <input onChange={getUserData} className='form-control mb-2' id='first_name' name='first_name' />

                    <label htmlFor="last_name">last_name:</label>
                    <input onChange={getUserData} className='form-control mb-2' id='last_name' name='last_name' />

                    <label htmlFor="age">age:</label>
                    <input onChange={getUserData} type='number' className='form-control mb-2' id='age' name='age' />
                    
                    <label htmlFor="email">email:</label>
                    <input onChange={getUserData} type='email' className='form-control mb-2' id='email' name='email' />

                    <label htmlFor="password">password:</label>
                    <input onChange={getUserData} type='password' className='form-control mb-2' id='password' name='password' />

                    <button type='submit' className='btn btn-outline-info'>
                        {isLoading === true ? <i className='fas fa-spinner fa-spin'></i>:'Register'}
                    </button>

                </form>
            </div>
        </>
    )
}

 */