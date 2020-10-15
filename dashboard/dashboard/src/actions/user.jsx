import * as type from '../types/usertypes';

export const loginclick = () => ({ type: type.LOGIN_CLICK });
export const loginsuccess = () => ({ type: type.LOGIN_SUCCESS });
export const loginfailure = () => ({ type: type.LOGIN_FAILURE });