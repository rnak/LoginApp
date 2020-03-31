import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ListDiv } from '../../commons/elements';
import {Link} from 'react-router-dom';
const AlbumList = (props) => {
    const [albums, setAlbums] = useState(undefined);
    useEffect(() => {
        axios.get(`/users/${props.id}/albums`).then((response) => {
            setAlbums(response.data);
        })
    }, [])
    const Div = ({label, value}) => <div><span>{label}: </span> <span>{value}</span></div>
    const getAlbumTemplate = () => {
        return albums.map((album) => {
            return (
                
            <ListDiv key={album.id}>
                <Link to={`/albums/${album.id}`}>
                    <Div label="Title" value={album.title}/>
                </Link>
                
            </ListDiv>)
        })
    }
    return (
        <>
        {albums ? getAlbumTemplate() : "Loading..."}
        </>
    );
}

export default AlbumList;