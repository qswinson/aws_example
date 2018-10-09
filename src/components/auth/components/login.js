import React, { Component } from 'react';
import { connect }              from 'react-redux';
import { login } from '../actions';

class Login extends Component {
    componentWillMount() {
        this.props.login();
    }

    render() {
        return (
            <div>Please Log In</div>
        );
    }
}

export default connect(null, { login })(Login);
