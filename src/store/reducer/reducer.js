import { defaultState } from "../state/default.state.js";

const reducer = (state = defaultState, action) => {
    const newState = {...state};
    if(action.type === 'fetch_org_data') {
        console.log(action)
    } else
    if(action.type === 'ON_SUCCESS') {
        console.log(action)
    }
    return newState;
}

export default reducer;