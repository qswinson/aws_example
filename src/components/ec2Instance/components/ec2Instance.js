import React from 'react';
import PropTypes from 'prop-types';
import { Ec2Cost } from '../../ec2Cost/components';

const style = {
    ec2Summary: {
        margin: '5px',
        padding: '5px',
        backgroundColor: 'white',
        width: '100%',
        fontSize: '14px',
        lineHeight: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center'
    },
    title: {
        fontSize: '40px',
        fontWeight: '500',
        lineHeight: '30px'
    },
    buttonRow: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center'
    }
};

const Ec2Instance = ({ ec2Instance, selectEC2Instance, ...props }) => {
    const tags = ec2Instance.tags.map((element, index) => {
        return (element.key === 'Name') ? null : <div key={index}>{element.key}: {element.value}</div>;
    });

    return <div style={style.ec2Summary} onClick={selectEC2Instance}>
        <div style={style.title}>{ec2Instance.name}</div>
        <div>{ new Date(ec2Instance.launchTime).toLocaleString() }</div>
        <div>{ec2Instance.instanceType}</div>
        <Ec2Cost instanceType={ec2Instance.instanceType} region={ec2Instance.region} />
        {tags}
        <div style={style.buttonRow}>
        <button>Command 1</button>
        <button>Command 2</button>
        <button>Command 3</button>
        <button>Command 4</button>
        </div>
    </div>;
};

Ec2Instance.propTypes = {
    ec2Instance: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
};

export default Ec2Instance;
