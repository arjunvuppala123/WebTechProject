import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component
{

    componentDidMount(){
        const config = {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('token')
            }
        }
        axios.get("http://localhost:5000/api/user",config).then(
            res => {
            console.log(res)
        },
        err => {
            console.log(err)
        })
    }

    render() {
        return (
            <h2>Not logged in</h2>
        );
    }
}
export default Home;