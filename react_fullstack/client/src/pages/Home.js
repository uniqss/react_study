import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useHistory} from 'react-router-dom';
import {SERVER_HOST} from '../HostCfg'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export default function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);
    let history = useHistory();

    useEffect(() => {
        axios.get(`${SERVER_HOST}/posts`, {headers: {accessToken: localStorage.getItem('accessToken')}}).then((response) => {
            // console.log(response.data);
            setListOfPosts(response.data.listOfPosts);
            setLikedPosts(response.data.likedPosts.map((like) => {
                return like.PostId;
            }));
            // console.log(response.data.likedPosts);
        });
    }, []);

    const likeAPost = (postId) => {
        axios.post(`${SERVER_HOST}/likes`,
            {PostId: postId},
            {headers: {accessToken: localStorage.getItem('accessToken')}}
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
                })
            );

            if (likedPosts.includes(postId)) {
                setLikedPosts(likedPosts.filter((id) => {
                        return id != postId
                    })
                );
            } else {
                setLikedPosts([...likedPosts, postId])
            }
        });
    }

    return (
        <div>
            {listOfPosts.map((value, key) => {
                return <div className="post" key={key}>
                    <div className="title">{value.title}</div>
                    <div className="body" onClick={() => {
                        history.push(`/post/${value.id}`)
                    }}>{value.postText}</div>
                    <div className="footer">
                        <div className="username">{value.username}</div>
                        <div className="buttons">
                            <ThumbUpAltIcon
                                onClick={() => likeAPost(value.id)}
                                visibility={likedPosts.includes(value.id)}
                            />
                        </div>
                        <label>{value.Likes.length}</label>
                    </div>
                </div>;
            })}
        </div>
    )
}
