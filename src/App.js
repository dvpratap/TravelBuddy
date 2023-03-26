import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Loginpage from './Loginpage';
import SearchPage from './SearchPage';
import SignUp from './Signup';
import BookMain from './Book_Main';
import BookDesc from './Book_Description';

const App = () => {
  return (  
    <div>
      <div>
        <Navbar />
      </div>
      <Router>
      <Routes>
      <Route exact path="/" element={<SearchPage/>} />
      <Route path="/login" element={<Loginpage/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/book_main" element={<BookMain/>} />
      <Route path="/Book_Desc" element={<BookDesc/>} />
      </Routes>
  </Router>
    </div> 
  );
}

export default App