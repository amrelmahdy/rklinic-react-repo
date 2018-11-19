const initState = {
    specialities: [],
    specialtyListIsLoading: true

};


const specialityReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_SPECIALITIES_LIST" :
            state = {
                ...state,
                specialities: action.payload,
                specialtyListIsLoading: false
            }
            break;
        default:
    }

    return state;
};

export default specialityReducer