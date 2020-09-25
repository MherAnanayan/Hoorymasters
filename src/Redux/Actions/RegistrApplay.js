import { ADD_REGISTRATION_DATA, ADD_LOGIN_DATA, ADD_ASSISTANT_NAME_DATA, ADD_ASSISTANT_STYLE_DATA} from './types';

export const addRegistrationData = (formData) => {
    return dispatch => {
        return dispatch({
            type: ADD_REGISTRATION_DATA,
            payload: formData,
        });
    }
}
 
export const addloginData = (formData) => {
    return dispatch => {
        return dispatch({
            type: ADD_LOGIN_DATA,
            payload: formData,
        });
    }
}

export const addAssistantNameData = (formData) => {
    return dispatch => {
        return dispatch({
            type: ADD_ASSISTANT_NAME_DATA,
            payload: formData,
        });
    }
}

export const addAssistantStyleData = (formData) => {
    return dispatch => {
        return dispatch({
            type: ADD_ASSISTANT_STYLE_DATA,
            payload: formData,
        });
    }
}