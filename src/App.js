import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Loginpage from './Loginpage';
import SearchPage from './SearchPage';
import SignUp from './Signup';
import BookMain from './Book_Main';
import BookDesc from './Book_Description';
import RideHistory from './RideHistory'
import RideHistoryNew from "./RideHistoryNew";
import Postride from "./Postride";
import ChatPage from "./ChatPage";
import PaymentPage from "./PaymentPage";
import PaymentSuccessPage from "./PaymentSuccessPage";
import { useState } from 'react';
import UserContext from './UserContext';


const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setUser] = useState('');
  return (  
    <div>
      <UserContext.Provider value={{user,setUser}}>
      <Router>
      <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
      <Route exact path="/" element={<SearchPage/>} />
      <Route path="/login" element={<Loginpage setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/book_main" element={<BookMain/>} />
      <Route path="/Book_Desc" element={<BookDesc/>} />
      <Route path="/rideHistory" element={<RideHistory/>} />
      <Route path="/rideHistoryNew" element={<RideHistoryNew/>} />
      <Route path="/postride" element={<Postride/>} />
      <Route path="/chat" element={<ChatPage/>} />
      <Route path="/payment" element={<PaymentPage/>} />
      <Route path="/payment/success" element={<PaymentSuccessPage/>} />
      </Routes>
  </Router>
  </UserContext.Provider>
    </div> 
  );
}

export default App