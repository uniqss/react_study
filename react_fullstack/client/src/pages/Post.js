import React, {useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from "axios";
import {SERVER_HOST} from '../HostCfg'
import {AuthContext} from "../helpers/AuthContext";

export default function Post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const {authState} = useContext(AuthContext);

    useEffect(() => {
        axios.get(`${SERVER_HOST}/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });

        axios.get(`${SERVER_HOST}/comments/${id}`).then((response) => {
            setComments(response.data);
        });
    }, []);

    const addComment = (data) => {
        axios.post(`${SERVER_HOST}/comments`, {commentBody: newComment, PostId: id},
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            }).then((response) => {
            if (response.data.error) {
                console.log(response.data.error);
                // alert(response.data.error);
            } else {
                const commentToAdd = {commentBody: newComment, username: response.data.username};
                setComments([...comments, commentToAdd]);
                console.log("comment added!");
                setNewComment("");
            }
        });
    };

    const deleteComment = (id) => {
        axios.delete(`${SERVER_HOST}/comments/${id}`, {
            headers:{accessToken: localStorage.getItem('accessToken')},
        }).then(() => {
            setComments(comments.filter((val) => {
                return val.id !== id;
            }));
        })
    }

    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="title">{postObject.title}</div>
                <div className="postText">{postObject.postText}</div>
                <div className="username">{postObject.username}</div>
            </div>
            <div className="rightSide">
                <div className="addCommentContainer">
                    <input type="text" value={newComment} placeholder="Comment..." autoComplete="off"
                           onChange={(event) => {
                               setNewComment(event.target.value)
                           }}></input>
                    <button onClick={addComment}>Add Comment</button>
                </div>
                <div className="listOfComments">
                    {comments.map((comment, key) => {
                        return <div className="comment" key={key}>
                            {comment.commentBody}
                            <label>Username:{comment.username}</label>
                            {authState.username === comment.username && <button onClick={() => deleteComment(comment.id)}>X</button> }
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
