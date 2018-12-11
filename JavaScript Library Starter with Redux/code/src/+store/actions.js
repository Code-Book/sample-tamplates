import * as actionTypes from './actionTypes';

const demo = () => {
    return {
        type: actionTypes.ACTION_DEMO
    }
};

const demoSuccess = (data) => {
    return {
        type: actionTypes.ACTION_DEMO_SUCCESS,
        data
    }
};

const demoFailure = (error) => {
    return {
        type: actionTypes.ACTION_DEMO_FAILURE,
        error
    }
};

export const showDemo = () => {
    return dispatch => {
        dispatch(demo());

        setTimeout(() => {
            dispatch(demoSuccess('Demo done'));
        }, 1000);
    }
};