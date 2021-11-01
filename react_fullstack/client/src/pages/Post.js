import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });

        axios.get(`http://127.0.0.1:3001/comments/${id}`).then((response) => {
            setComments(response.data);
        });
    }, []);

    const addComment = (data) => {
        axios.post("http://127.0.0.1:3001/comments", { commentBody: newComment, PostId: id }).then((response) => {
            const commentToAdd = {commentBody: newComment};
            setComments([...comments, commentToAdd]);
            console.log("comment added!");
            setNewComment("");
        });
    };

    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="title">{postObject.title}</div>
                <div className="postText">{postObject.postText}</div>
                <div className="username">{postObject.username}</div>
            </div>
            <div className="rightSide">
                <div className="addCommentContainer">
                    <input type="text" value={newComment} placeholder="Comment..." autoComplete="off" onChange={(event) => { setNewComment(event.target.value) }}></input>
                    <button onClick={addComment}>Add Comment</button>
                </div>
                <div className="listOfComments">
                    {comments.map((comment, key) => {
                        return <div className="comment" key={key}>{comment.commentBody}</div>
                    })}
                </div>
            </div>
        </div>
    )
}
