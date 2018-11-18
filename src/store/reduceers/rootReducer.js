import { combineReducers } from 'redux'
import doctorReducer from "./doctorReducer";
import specialityReducer from "./specialityReducer";

const rootReducer = combineReducers({
    doctor: doctorReducer,
    speciality: specialityReducer
})

export default rootReducer


