import React, { Component } from 'react';
import { withRouter }       from 'react-router';
import { connect }          from 'react-redux';
import { authenticate }     from '../actions';

class Callback extends Component {
    componentWillMount() {
        this.props.authenticate(this.props.history);
    }

    render() {
        return (
            <div>Loading user profile.</div>
        );
    }
}

export default withRouter(connect(null, { authenticate })(Callback));
