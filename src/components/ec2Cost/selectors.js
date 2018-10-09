export function findEc2Cost(state, instanceType, region) {
    return state.ec2Cost.prices.find(p => p.instanceType === instanceType && p.region === region);
}
