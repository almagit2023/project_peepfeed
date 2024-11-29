import axios from 'axios';
import React, { useState } from 'react';
import './Registration.css';


function Registration() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () =>{
        const {name,email,password, reEnterPassword} =user
        if(name&& email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register",user)
            .then(res => console.log(res))
        }
        else {
            alert("invalid Input");
        }
        
    }

    return (
        <div className="Register">
            <div className="innerRegister">
                {console.log("User", user)}
                <h1>Login</h1>
                <input type="text" name="name" value={user.name} placeholder="Enter Name" onChange={handleChange} /><br />
                <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange} /><br />
                <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange} /><br />
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange} /><br />
                <div className="regButton" onClick={register}>Register</div>
                <div className='or'>or</div>
                <div className="LoginButton">Login</div>
            </div>
        </div>
    )
}

export default Registration
