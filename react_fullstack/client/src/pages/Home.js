import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useHistory} from 'react-router-dom';
import {SERVER_HOST} from '../HostCfg'

export default function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);
    let history = useHistory();

    useEffect(() => {
        axios.get(`${SERVER_HOST}/posts`).then((response) => {
            // console.log(response.data);
            setListOfPosts(response.data);
        });
    }, []);

    const likeAPost = (postId) => {
        axios.post(`${SERVER_HOST}/likes`,
            {PostId: postId},
            {headers: {accessToken:localStorage.getItem('accessToken')}}
        ).then((response) => {
            // alert(response.data);
            setListOfPosts(listOfPosts.map((post) => {
                if (post.id === postId) {
                    if (response.data.liked) {
                        return {...post, Likes: [...post.Likes, 0]}
                    } else {
                        const likesArray = post.Likes
                        likesArray.pop();
                        return {...post, Likes: likesArray}
                    }
                } else {
                    return post
                }
            }))
        });
    }

    return (
        <div>
            {listOfPosts.map((value, key) => {
                return <div className="post" key={key}>
                    <div className="title">{value.title}</div>
                    <div className="body"  onClick={() => {
                        history.push(`/post/${value.id}`)
                    }}>{value.postText}</div>
                    <div className="footer">
                        {value.username}
                        <button onClick={() => likeAPost(value.id)}>Like</button>
                        <label>{value.Likes.length}</label>
                    </div>
                </div>;
            })}
        </div>
    )
}
