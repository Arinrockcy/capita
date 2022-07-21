import { defaultState } from "../state/default.state.js";
import actionsConstant from '../constants/actions'
const {loginActions} = actionsConstant;
console.log(actionsConstant)
const reducer = (state = defaultState, action) => {
    const newState = {...state};

    // eslint-disable-next-line default-case
    switch(action.type){
        case 'loggedIn':
            newState.user = action.loginPayload;
            break;
    }
    // if(action.type === 'fetch_org_data') {
    //     console.log(action)
    // } else
    // if(action.type === 'ON_SUCCESS') {
    //     console.log(action)
    // }
    return newState;
}

export default reducer;