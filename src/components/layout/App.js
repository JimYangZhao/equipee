import React from 'react';
import '../layout/App.css';
import '../layout/general.scss';
import Home from '../../Home';
// import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchPage from '../navbar/search/SearchPage'
import Navbar from '../navbar/Navbar';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import About from '../../About';
import Careers from '../../Careers';
import Contact from '../../Contact';
import CustomerTestimonials from '../../CustomerTestimonials';
import PrivacyPolicy from '../../Privacy-Policy';
import SiteMap from '../../SiteMap';

import NotFoundPage from '../NotFoundPage/404';

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        {/* <Header /> */}
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/search"><SearchPage /></Route>
          <Route exact path="/About"><About /></Route>
          <Route exact path="/Careers"><Careers /></Route>
          <Route exact path="/Contact"><Contact /></Route>
          <Route exact path="/CustomerTestimonials"><CustomerTestimonials /></Route>
          <Route exact path="/PrivacyPolicy"><PrivacyPolicy /></Route>
          <Route exact path="/SiteMap"><SiteMap /></Route>
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
        
        <Footer 
          src="https://res.cloudinary.com/dsfzcj5qk/image/upload/v1601596457/DOZR%20Home%20Banner%20Image%20Update%20Oct%202020/DOZR_Header_Image_Desktop_m9s0a0.jpg"
        />
      </ Router>
    </div>
  );
}

export default App;
