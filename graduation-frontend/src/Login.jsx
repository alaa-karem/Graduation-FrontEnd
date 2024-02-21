import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import  Axios  from 'axios';
import Joi, { func } from 'joi';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import loginImage from './images/loginfinal.jpg';
import './Login.css'; // Import your custom CSS file for additional styles
import { IoKeyOutline , IoMailOutline } from 'react-icons/io5';  
import { PiSignInBold } from "react-icons/pi";


export default function Login(props) {


    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(true);

    const closeLoginPopup = () => {
        setIsLoginPopupOpen(false);
    };

    useEffect(() => {
        // Manually blur the email input on component mount
        document.getElementById('email').blur();
    }, []);


    let navigate = useNavigate();

    const [errorList , setErrorList] = useState([]);

    const [isLoading , setIsLoading] = useState(false);

    const [error , setError] = useState('');  //if Login failed


    // Data the user login with it to his account:
    const [user , setUser] = useState({
        email:'',
        password:''
    })

    // Get user data to send it to backend and check its login:
    function getUserData(e){
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        console.log(myUser);
    }

    async function submitLoginForm(e){

        e.preventDefault();

        setIsLoading(true);
        
        let validationResult = validationLoginFrom();

        // console.log(validationResult);
        if(validationResult.error)
        {
            setErrorList(validationResult.error.details);
            setIsLoading(false);
        }
        else
        {
            let {data} = await Axios.post('URL/signin', user)
        
            if(data.message === 'success')   //success login
            {
                setIsLoading(false);
                //take user's data and storage it in his profile;
                localStorage.setItem('userToken', data.token);
                //call function saveUserData: up->
                props.saveUserData();
                //Navigate to home;
                navigate('/home');
            }
            else
            {
                setError(data.message);
                setIsLoading(false);
            }
        }

    }

    function validationLoginFrom(){
        let schema = Joi.object({
            email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
        })

        return schema.validate(user, {abortEarly:true}); // علشان ماتقفش عند أول ايرور و تكمل و تجيب كل الايرورز
    }

    return (
        <div>
        {isLoginPopupOpen && (
            <Popup onClose={closeLoginPopup} open={true} modal closeOnDocumentClick>
                <div className='popup-container'>
                    <div className='form-container '>

                        <h2 className='welcome'>Welcome Back</h2>

                        {/* <PiSignInBold  className='icon-signin'/> */}

                        <Link to='/forgot-password' className='forgot-pass d-block mb-3'>Forgot Your Password?</Link>


                        {errorList.map((error, i)=> i=== 1? <div className='alert py-2 alert-danger border rounded '>paassowrd invalid</div>:<div className='alert py-2 alert-danger border rounded '>{error.message}</div>)}
                        {/* {error.length > 0 ? <div className='alert alert-danger'>{error}</div> : '' } */}
                        <form onSubmit={submitLoginForm}>
                            <div className='mb-3'>
                                <input onChange={getUserData} onFocus={() => setErrorList([])} type='email' className='email-input' id='email' name='email' placeholder='   Email' />
                                <IoMailOutline className='ion-icon-email' />
                            </div>

                            <div className='mb-3'>  
                                <input onChange={getUserData} onFocus={() => setErrorList([])} type='password' className='pass-input' id='password' name='password' placeholder='   Password' autoFocus={false}/>
                                <IoKeyOutline className='ion-icon-password' />  
                            </div>

                            
                            <button type='submit' className='btn-submit btn-outline-info'>
                                {isLoading === true ? <i className='fas fa-spinner fa-spin'></i>:'Login'}
                            </button>

                            <div className='mt-3'>
                                <span>Do you have an account?</span>
                                <Link to='/register-type' className='ms-1'>Sign up now</Link>
                            </div>
                        </form>
                    </div>
                    
                    <div className='image-container '>
                            {/* Add your image component or img tag here */}
                            <img src={loginImage} alt="Image" className='img-fluid' />
                    </div>
                </div>
            </Popup>
        )}
        </div>
    );
}


