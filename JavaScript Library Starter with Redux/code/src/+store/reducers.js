import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    loading: false,
    data: null
};

export const demoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACTION_DEMO:
            return updateStateWithNewProperties(state, { loading: true, error: null, data: null });

        case actionTypes.ACTION_DEMO_SUCCESS:
            return updateStateWithNewProperties(state, { loading: false, data: action.data });

        case actionTypes.ACTION_DEMO_FAILURE:
            return updateStateWithNewProperties(state, { loading: false, error: action.error });

        default:
            return state;
    }
};

const updateStateWithNewProperties = (currentState, updatedProperties) => {
    return {
        ...currentState,
        ...updatedProperties
    };
};