import axios from 'axios';
import React, {useState} from 'react'

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const data = {username: username, password: password};
        axios.post("http://127.0.0.1:3001/auth/login", data).then((response)=> {
            console.log(response.data);
        });
    };
    return (
        <div>
            <input type="text" onChange={(event) => {
                setUserName(event.target.value);
            }}></input>
            <input type="password" onChange={(event) => {
                setPassword(event.target.value);
            }}></input>

            <button onClick = {login}>Login</button>
        </div>
    )
}

export default Login
