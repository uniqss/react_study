import axios from 'axios';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    const login = () => {
        const data = {username: username, password: password};
        axios.post("http://127.0.0.1:3001/auth/login", data).then((response)=> {
            if (response.data.error) {
                alert(response.data.error);
                return;
            } else {
                sessionStorage.setItem("accessToken", response.data);
                console.log(response.data);
                history.push("/");
            }
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
