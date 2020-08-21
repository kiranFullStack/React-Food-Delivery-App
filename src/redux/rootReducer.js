import { combineReducers } from "redux"
import hotelReducer from "./hotel/hotelReducer"

const rootReducer = combineReducers({
  hotelReducer: hotelReducer,
})

export default rootReducer
