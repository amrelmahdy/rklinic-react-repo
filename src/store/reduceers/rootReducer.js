import { combineReducers } from 'redux'
import doctorReducer from "./doctorReducer";
import specialityReducer from "./specialityReducer";

const rootReducer = combineReducers({
    doctor: doctorReducer,
    specialty: specialityReducer
})

export default rootReducer


