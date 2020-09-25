import * as RegistrApply from '../Actions/types'


const initialState = {
    registrData: {},
    assistantNameDate: {},
    logindate:{},
    assistantStyleDate:{},

}


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case RegistrApply.ADD_REGISTRATION_DATA:
            return {
                ...state,
               registrData: payload,
            };
        case RegistrApply.ADD_LOGIN_DATA:
            return {
                ...state,
                loginData: payload,
            };
        case RegistrApply.ADD_ASSISTANT_NAME_DATA:
            return {
                ...state,
                assistantNameDate: payload.name,
            };
        case RegistrApply.ADD_ASSISTANT_STYLE_DATA:
            return {
                ...state,
                assistantStyleDate: payload.name,
            }
            
        default: 
            return state 
       
    }
}

