import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function CreatePost() {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    });

    let history = useHistory();
    const onSubmit = (data) => {
        axios.post("http://127.0.0.1:3001/posts", data).then((response)=>{
          console.log("It works!");
          history.push("/");
        });
    };

    return (
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                <Form className="formContainer">
                    <label>Title:</label>
                    <ErrorMessage name="title" component="span"/>
                    <Field
                        // autocomplete="off"
                        id="inputCreatePost"
                        name="title"
                        placeholder="(Ex.Title...)"
                    />
                    <label>postText:</label>
                    <ErrorMessage name="postText" component="span"/>
                    <Field
                        // autocomplete="off"
                        id="inputCreatePost"
                        name="postText"
                        placeholder="(Ex.Post Text...)"
                    />
                    <label>username:</label>
                    <ErrorMessage name="username" component="span"/>
                    <Field
                        // autocomplete="off"
                        id="inputCreatePost"
                        name="username"
                        placeholder="(Ex.Username...)"
                    />

                    <button type="submit">Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}
