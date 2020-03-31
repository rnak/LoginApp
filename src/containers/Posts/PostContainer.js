import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ListDiv } from '../../commons/elements';
const Posts = (props) => {
    const [posts, setPost] = useState(undefined);
    useEffect(() => {
        axios.get(`/users/${props.id}/posts`).then((response) => {
            setPost(response.data);
        })
    }, [])
    const Div = ({label, value}) => <div><span>{label}: </span> <span>{value}</span></div>
    const getPostTemplate = () => {
        return posts.map((post) => {
            return (
            <ListDiv key={post.id}>
                <Div label="Title" value={post.title}/>
                <Div label="Description" value={post.body}/>
            </ListDiv>)
        })
    }
    return (
        <>
        {posts ? getPostTemplate(): "Loading..."}
        </>
    );
}

export default Posts;