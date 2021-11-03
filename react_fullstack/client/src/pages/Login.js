import axios from 'axios';
import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {SERVER_HOST} from '../HostCfg'
import {AuthContext} from "../helpers/AuthContext"

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {setAuthState} = useContext(AuthContext);

    let history = useHistory();

    const login = () => {
        const data = {username: username, password: password};
        axios.post(`${SERVER_HOST}/auth/login`, data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);

            } else {
                localStorage.setItem("accessToken", response.data);
                setAuthState(true);
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

            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login
