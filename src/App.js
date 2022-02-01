import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Question1 from './components/pages/Question1';
import Question2 from './components/pages/Question2';
import Question3 from './components/pages/Question3';

import './App.css';

const App = () => {
  
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path='/question1' element={<Question1/>} />
            <Route exact path='/question2/:id' element={<Question2/>} />
            <Route exact path='/question3' element={<Question3/>} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
