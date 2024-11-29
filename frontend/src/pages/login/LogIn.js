import React,{useState} from 'react'
import './LogIn.css'
import axios from "axios";

function LogIn() {

    const [user, setUser] = useState({   
        email: "",
        password: ""
    })

    
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = ()=>{
         axios.post("http://localhost:9002/login",user)
         .then(res=> alert(res.data.message));
    }

    return (
        <div className="logIn">
            <div className="innerLogIn">
                <h1>Login</h1>
                <input type="text" name="email" value={user.name}  onChange= {handleChange}  placeholder="Enter Email" /><br />
                <input type="password" name="password" value={user.password}  onChange= {handleChange} placeholder="Enter Password" /><br />
                <div className="LoginButton" onClick={login}>Login</div>
                <div class='or'>or</div>
                <div className="regButton">Register</div>
            </div>
        </div>
    )
}

export default LogIn
