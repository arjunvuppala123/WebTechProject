import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		name: '',
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
    

    handleSubmit = e => {
        e.preventDefault();
        
        let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
        const data = {
            name:this.name,
            email:this.email,
            password:this.password
        }
       axios.post('api/register',data).then(
            res => {
				console.log(res)
				this.props.history.push('./');
            }
        ).catch(
            err => {
                console.log("error occ")
                console.log(err)
            }
        )
        
    }


	// displayLogin(e) {
	// 	e.preventDefault();
	// 	console.log('You have successfully registered');
	// 	console.log(this.state);
	// 	this.setState({
	// 		name: '',
	// 		email: '',
	// 		password: ''
    //     });
    //     //<form onSubmit={this.displayLogin}>
	// }

	render() {
		return (
			<div classbane ='auth-wrapper'>
			<br />
			<br />
			<br />
           <div id = "auth-inner">
			<div className="register">
				<form onSubmit={this.handleSubmit}>
					<h2>Register</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Name"
							name="name"
                            //value={this.state.name}
                            value={this.name}
                            //onChange={this.update}
							onChange={e => this.name = e.target.value}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
                           // value={this.state.email}
                           value={this.email}
                            //onChange={this.update}
							onChange={e => this.email = e.target.value}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
                            //value={this.state.password}
                            value={this.password}
                            //onChange={this.update}
							onChange={e => this.password = e.target.value}
						/>
					</div>

					

					<input type="submit" value="Register" />
				</form>

				<Link to="/Login">Login Here</Link>
			</div>
			</div>
			</div>
		);
	}
}

export default Register;