import * as type from '../types/usertypes';

const initialState = {
    users: [],
    isloggedin: false,
    errormessage: null,
  }
  
  export default function users(state = initialState, action) {
    switch (action.type) {
      case type.LOGIN_CLICK:
        return {
          ...state,
        }
      case type.LOGIN_SUCCESS:
        return {
          ...state,
          isloggedin: true,
          users: action.users
        }
      case type.LOGIN_FAILURE:
        return {
          ...state,
          isloggedin: false,
          error: action.message,
        }
      default:
        return state
    }
  }