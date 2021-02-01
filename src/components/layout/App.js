import React from 'react';
import '../layout/App.css';
import Home from '../../Home';
// import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchPage from '../navbar/search/SearchPage'
import Navbar from '../navbar/Navbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        {/* <Header /> */}
        <Navbar />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer 
          src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
        />
      </ Router>
    </div>
  );
}

export default App;
