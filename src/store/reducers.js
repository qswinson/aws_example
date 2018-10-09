import { combineReducers } from 'redux';

import auth from '../components/auth';
import ec2Cost from '../components/ec2Cost';
import ec2Instance from '../components/ec2Instance';

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        [auth.constants.NAME]                : auth.reducer,
        [ec2Cost.constants.NAME]             : ec2Cost.reducer,
        [ec2Instance.constants.NAME]         : ec2Instance.reducer,
        ...asyncReducers
    });
};
