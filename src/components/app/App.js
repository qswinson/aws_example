import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { withRouter }       from 'react-router-dom';
import { Route }            from 'react-router-dom';
import './App.css';
import Auth from            '../auth';
import { Ec2List }          from '../ec2Instance/components';
import { Callback, Login }  from       '../auth/components';

const mapStateToProps = (state, props) => ({
    isLoggedIn: Auth.selectors.isLoggedIn(state)
});

class App extends Component {
    render() {
        const { isLoggedIn } = this.props;
        return (
            <div className="App">
                <Route exact path='/callback' render={() => ( <Callback /> )} />
                <Route exact path='/' render={() => { return (isLoggedIn) ? <Ec2List /> : <Login />; }}/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(App));
