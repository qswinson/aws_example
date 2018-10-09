import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { loadAllEc2Instances,  selectEC2Instance }  from '../actions';
import { getEc2Instances, getSelectedInstanceId }      from '../selectors';
import Ec2Instance              from './ec2Instance';
import Ec2Summary               from './ec2Summary';

const style = {
    ec2List: {
        display: 'flex',
        flexFlow: 'row wrap',
        backgroundColor: 'grey'
    },
}

const mapStateToProps = (state, props) => ({
    instances: getEc2Instances(state),
    selectedInstanceId: getSelectedInstanceId(state)
});

class Ec2List extends Component {
    componentWillMount() {
        this.props.loadAllEc2Instances();
    }

    render() {
        const { instances, selectedInstanceId } = this.props;

        const list = instances.map((instance) => {
            return (instance.instanceId === selectedInstanceId) ?
                <Ec2Instance key={instance.instanceId} ec2Instance={instance} selectEC2Instance={this.props.selectEC2Instance} /> :
                <Ec2Summary key={instance.instanceId} ec2Instance={instance} selectEC2Instance={this.props.selectEC2Instance} />;
        });

        return (
            <div style={style.ec2List}>
                {list}
            </div>
        );
    }
}

export default connect(mapStateToProps, { loadAllEc2Instances, selectEC2Instance })(Ec2List);
