import Footer from './components/footer';
import React from 'react';
import './css/main.css'
import { Route, Switch, Redirect,  } from 'react-router-dom';
import NavBar from './components/navBar';

import HomePage from './pages/home';
import ContactsPage from './pages/contactsPage';
import Projects from './pages/projects';
import ScrollToTop from './utils/scrolToTop';

function App() {
    return (
        <div className='body'>
            <ScrollToTop />
            <NavBar></NavBar>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/projects/:id?" component={Projects} />
                <Route path="/contact" component={ContactsPage} />
                
                <Redirect exact from="/" to="/home" />
            </Switch>
            <Footer></Footer>
        </div>
  );
}

export default App;
