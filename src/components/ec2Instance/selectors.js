export function getEc2Instances(state) {
    return state.ec2Instance.entities || [];
}

export function getSelectedInstanceId(state) {
    return state.ec2Instance.selectedInstanceId;
}
