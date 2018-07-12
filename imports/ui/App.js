import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import SignUp from './pages/SignUp'
import Cabinet from './pages/Cabinet'
// App component - represents the whole app
export default class App extends Component {

    render() {
        return (
            <div id="page">
                <Router>
                    <React.Fragment>
                <Header/>   
                        <Switch>
                            <Route exact path='/cabinet' component={Cabinet}/>
                            <Route exact path='/register' component={SignUp}/>
                            <Route exact path='/login' component={LoginPage} />
                            <Route exact path='/' component={Home}/>
                        </Switch>
                <Footer/>
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}