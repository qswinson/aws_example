import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { findEc2Cost }          from '../selectors';

const mapStateToProps = (state, props) => ({
    price: findEc2Cost(state, props.instanceType, props.region)
});

class Ec2Cost extends Component {
    render() {
        const { price, region } = this.props;

        if (!price) {
            return <div>missing {region}</div>
        }

        const costPerDay = Math.ceil(price.hourlyPrice * 24 * 100) / 100;

        return (
            <div>${costPerDay}/day</div>
        );
    }
}

export default connect(mapStateToProps)(Ec2Cost);
