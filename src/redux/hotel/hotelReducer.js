import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE,
} from "./hotelTypes"

const initialState = {
  loading: false,
  hotels: [],
  error: "",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTELS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_HOTELS_SUCCESS:
      return {
        loading: false,
        hotels: action.payload,
        error: "",
      }
    case FETCH_HOTELS_FAILURE:
      return {
        loading: false,
        hotels: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
