import React from 'react'
import axios from "axios";
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);
    let history = useHistory();

    useEffect(()=>{
      axios.get("http://127.0.0.1:3001/posts").then((response)=>{
        // console.log(response.data);
        setListOfPosts(response.data);
      });
    }, []);

    return (
        <div>
            {listOfPosts.map((value, key) => {
                return <div className="post" key={key} onClick={() => {history.push(`/post/${value.id}`)}}>
                    <div className="title">{value.title}</div>
                    <div className="body">{value.postText}</div>
                    <div className="footer">{value.username}</div>
                </div>;
            })}
        </div>
    )
}
