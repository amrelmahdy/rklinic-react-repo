const initState = {
    doctors: []
}
const doctorReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_DOCTORS_LIST":
            state = {
                ...state,
                doctors: action.payload
            };
            break;
        default :
            // do nothing
    }
    return state
}


export default doctorReducer