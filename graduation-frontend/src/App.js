import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import RegisterType from './RegisterType';
import Login from './Login';
import RegisterAsTourist2 from './RegisterAsTourist2';
import RegisterAsTourGuide2 from './RegisterAsTourGuide2';
import ReviewPage from './ReviewPage';
import PlanTrip from './PlanTrip';


import { Route, Routes } from 'react-router-dom';
import Cities from './Cities';
import CarRental from './CarRental';
import ForgotPassword from './ForgotPassword';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import RegisterAsTourist3 from './RegisterAsTourist3';
import RegisterAsTourGuide3 from './RegisterAsTourGuide3';
import VerifyEmail from './VerifyEmail';
import ResetPassword from './ResetPassword';

function App() {

  const [userData , setUserData] = useState(null);
  function saveUserData(){
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }


  return (
    <div className="App">
      <Navbar/>
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='cities' element={<Cities/>}/>
          <Route path='car-rental' element={<CarRental/>}/>
          <Route path='plan-a-trip' element={<PlanTrip/>}/>
          {/* nested */}
          <Route path='register-type' element={<RegisterType/>}/>  
          <Route path='register-as-tourist-2' element={<RegisterAsTourist2/>}/>
          <Route path='register-as-tourguide-2' element={<RegisterAsTourGuide2/>}/>
          <Route path='register-as-tourist-3' element={<RegisterAsTourist3/>}/>
          <Route path='register-as-tourguide-3' element={<RegisterAsTourGuide3/>}/>
          <Route path='login' element={<Login saveUserData={saveUserData} />}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='verity-email' element={<VerifyEmail/>}/>
          <Route path='reset-password' element={<ResetPassword/>}/>

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;







