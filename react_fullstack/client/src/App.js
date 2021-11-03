import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Post from "./pages/Post"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import {AuthContext} from "./helpers/AuthContext"
import {useEffect, useState} from 'react'
import axios from 'axios';
import {SERVER_HOST} from './HostCfg'

function App() {
    const [authState, setAuthState] = useState({username: "", id: 0, status: false});

    useEffect(() => {
        // if (localStorage.getItem('accessToken')) {
        //   setAuthState(true);
        // }
        axios.get(`${SERVER_HOST}/auth/auth`, {
            headers: {
                accessToken: localStorage.getItem('accessToken'),
            }
        }).then((response) => {
            if (response.data.error) {
                setAuthState({...authState, status: false});
            } else {
                setAuthState({username: response.data.username, id: response.data.id, status: true});
            }
        });
    }, []);

    const logout = () => {
        localStorage.removeItem("accessToken")
        setAuthState({username: "", id: 0, status: false})
    }

    return (
        <div className="App">
            <AuthContext.Provider value={{authState, setAuthState}}>
                <Router>
                    <div className="navbar">
                        <Link to="/">Home Page</Link>
                        <Link to="/createpost">Create a post</Link>
                        {!authState.status ? (
                            <div>
                                <Link to="/login">Login</Link>
                                <Link to="/registration">Registration</Link>
                            </div>
                        ) : (
                            <button onClick={logout}>Logout</button>
                        )
                        }

                        <h1>{authState.username}</h1>
                    </div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/createpost" exact component={CreatePost}/>
                        <Route path="/post/:id" exact component={Post}/>
                        <Route path="/registration" exact component={Registration}/>
                        <Route path="/login" exact component={Login}/>
                    </Switch>
                </Router>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
