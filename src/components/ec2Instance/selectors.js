export function getEc2Instance(state, instanceId) {
    if (state.ec2Instance.entity && state.ec2Instance.entity.instanceId === instanceId) {
        return state.ec2Instance.entity;
    }

    return null;
}

export function getEc2Instances(state) {
    return state.ec2Instance.entities || [];
}

export function getSelectedInstanceId(state) {
    return state.ec2Instance.selectedInstanceId;
}
