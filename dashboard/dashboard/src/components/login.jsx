import React from "react";
import {useDispatch, useSelector } from 'react-redux';
import { loginclick } from "../actions/user";
import { LOGIN_SUCCESS } from "../types/usertypes";


export const Login = () => {
    const dispatch = useDispatch();

    const formsubmit =(e) => {
        e.preventDefault();
        dispatch({type: LOGIN_SUCCESS})
    }

    return (
        <form onSubmit = {formsubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
    );
}