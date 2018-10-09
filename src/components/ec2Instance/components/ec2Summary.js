import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectEC2Instance }  from '../actions';
import { Ec2Cost } from '../../ec2Cost/components';

const style = {
    ec2Summary: {
        margin: '5px',
        padding: '5px',
        backgroundColor: 'white',
        width: '200px',
        fontSize: '14px',
        lineHeight: '20px',
        overflow: 'hidden'
    },
    title: {
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '30px'
    }
};

const Ec2Summary = ({ ec2Instance, ...props }) => {
    const tags = ec2Instance.tags.map((element, index) => {
        // return (element.key === 'Name') ? null : <span key={element.key}>element.value</span>;
        return (element.key === 'Name') ? null : <div key={index}>{element.key}: {element.value}</div>;
    });

    return <div style={style.ec2Summary} onClick={() => props.selectEC2Instance(ec2Instance.instanceId)}>
        <div style={style.title}>{ec2Instance.name}</div>
        <div>{ new Date(ec2Instance.launchTime).toLocaleString() }</div>
        <div>{ec2Instance.instanceType}</div>
        <Ec2Cost instanceType={ec2Instance.instanceType} region={ec2Instance.region} />
        {tags}
    </div>;
};

Ec2Summary.propTypes = {
    ec2Instance: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
};

export default connect(null, { selectEC2Instance })(Ec2Summary);
