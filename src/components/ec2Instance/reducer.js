import EC2INSTANCE  from './actionTypes';
import { sort } from '../../utils';


const defaultState = { entities: null, selectedInstanceId: null };

export default function ec2Instance(state = defaultState, action) {
    switch (action.type) {
        case EC2INSTANCE.REQUEST_ALL_EC2INSTANCES_SUCCESS:
            action.response.results.sort((a, b) => { return sort.stringSort(a.name, b.name); });
            return { ...state, entities: action.response.results };
        case EC2INSTANCE.SELECT_EC2_INSTANCE:
            return { ...state, selectedInstanceId: action.selectedInstanceId };
        default:
            return state;
    }
}
