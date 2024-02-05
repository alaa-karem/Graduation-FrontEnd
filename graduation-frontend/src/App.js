import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import RegisterAsTourist from './RegisterAsTourist';
import RegisterAsTourGuide from './RegisterAsTourGuide';
import ReviewPage from './ReviewPage';
import PlanTrip from './PlanTrip';


import { Route, Routes } from 'react-router-dom';
import Cities from './Cities';
import CarRental from './CarRental';
import ForgotPassword from './ForgotPassword';

function App() {
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
          <Route path='register' element={<Register/>}>  
            <Route path='register-as-tourist' element={<RegisterAsTourist/>}/>
            <Route path='register-as-tourguide' element={<RegisterAsTourGuide/>}/>
          </Route>  
          <Route path='login' element={<Login/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;







