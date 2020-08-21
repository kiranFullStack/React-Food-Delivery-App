import axios from "axios"
import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE,
} from "./hotelTypes"

export const fetchHotels = () => {
  return (dispatch) => {
    dispatch(fetchHotelsRequest())
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the users
        const users = response.data
        dispatch(fetchHotelsSuccess(users))
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchHotelsFailure(error.message))
      })
  }
}

export const fetchHotelsRequest = () => {
  return {
    type: FETCH_HOTELS_REQUEST,
  }
}

export const fetchHotelsSuccess = (users) => {
  return {
    type: FETCH_HOTELS_SUCCESS,
    payload: users,
  }
}

export const fetchHotelsFailure = (error) => {
  return {
    type: FETCH_HOTELS_FAILURE,
    payload: error,
  }
}
