import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import '../App.css';
import '../index.css';
export const SET_CURRENT_USER = "SET_CURRENT_USER";

class Login extends Component {


    handleSubmit = e => {

        e.preventDefault();

        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
        const data = {

            username: this.email,
            password: this.password
        }
        axios.post('http://localhost:5000/api/login', data).then(
            res => {
                localStorage.setItem('token', res.data.token);

                if (res.data.message === "Login Successful") {
                    console.log("success");
                    this.props.history.push('./mainpage');
                    alert('Login sucessful');
                }
                /*
                                if(res.data.message === "Password does not match"){
                                    this.props.history.push('./login');
                                }*/
            }
        ).catch(
            err => {
                console.log("error occ")
                console.log(err)

            }

        )


    }

    render() {
        return ( <
            div classbane = 'auth-wrapper' >
            <
            br / > < br / > < br / > < br / >
            <
            br / > < br / > < br / > < br / >
            <
            div id = "auth-inner" >
            <
            div className = "login" >
            <
            form onSubmit = { this.handleSubmit } >
            <
            h2 > Login < /h2> <
            div className = "email" >
            <
            input type = "text"
            placeholder = "Enter your email"
            name = "email"
            // value={this.state.email}
            value = { this.email }
            //onChange={this.update}
            onChange = { e => this.email = e.target.value }
            /> <
            /div>

            <
            div className = "password"
            id = "password" >
            <
            input type = "password"
            placeholder = "Password"
            name = "password"
            //value={this.state.password}
            value = { this.password }
            //onChange={this.update}
            onChange = { e => this.password = e.target.value }
            /> <
            /div>

            <
            input type = "submit"
            value = "Login" / >
            <
            /form>

            <
            Link class = "reg-link"
            to = "/register" > Create an account < /Link> <
            /div></div > < /div>
        );
    }
}


export const loginUser = (user, dispatch, seterror) => {
    //login
    fetch("http://localhost:3001/server/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.ok === true) {
                const token = data.token;
                localStorage.setItem("jwt", token);
                const decoded = jwt_decode(token);

                seterror("");

                dispatch(setCurrentUser(decoded));
            } else {
                seterror(data.err.message);
                logoutUser(dispatch);
            }
        })
        .catch((err) => {
            logoutUser(dispatch);
        });
};

export const setCurrentUser = (decoded) => {
    //if logged in,set user data
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    };
};

export const logoutUser = (dispatch) => {
    //logout
    localStorage.removeItem("jwt");
    dispatch(setCurrentUser({}));
};


export default Login;

/* constructor(props) {
    // 	super(props);

    // 	this.state = {
    // 		email: '',
    // 		password: ''
    // 	};

    // 	this.update = this.update.bind(this);

    // 	this.displayLogin = this.displayLogin.bind(this);
    // }

    // update(e) {
    // 	let name = e.target.name;
    // 	let value = e.target.value;
    // 	this.setState({
    // 		[name]: value
    // 	});
    // }

    // displayLogin(e) {
    // 	e.preventDefault();
    // 	console.log('You are logged in');
    // 	console.log(this.state);
    // 	this.setState({
    // 		email: '',
    // 		password: ''
    // 	});
    //<form onSubmit={this.displayLogin}>
    // } */