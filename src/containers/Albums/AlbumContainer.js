import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { isAuthenticated } from '../../commons/Authenticator'
import { ListDiv, Wrapper } from '../../commons/elements';
import Header from '../DashBoardPage/Header';
import { Image, Modal, ModalDetail, Close, LargeImage } from './elements';
const AlbumContainer = (props) => {
    const [selectedPhoto, setSelectedPhoto] = useState(undefined)
    useEffect(() => {
        !isAuthenticated() && history.push('/login');
    })
    const [photos, setPhotos] = useState(undefined);
    useEffect(() => {
        axios.get(`/albums/${props.match.params.id}/photos`).then((response) => {
            setPhotos(response.data);
        })
    }, [])
    const handleImageClick = (url, title) => {
        console.log(url, title);
        setSelectedPhoto({url, title})
    }
    const handleOnClose = () => {
        setSelectedPhoto(undefined);
    }
    const getPhotosTemplate = () => {
        return photos.map((photo) =>  ( 
                <Image key={photo.id} src={photo.thumbnailUrl} onClick={handleImageClick.bind(this, photo.url, photo.title)}></Image>
            )
        )
    }
    return (
        <>
            <Header/>
            <Wrapper>
                <ListDiv>
                    {photos ? getPhotosTemplate() : "Loading..."}
                </ListDiv>
            </Wrapper>
            {selectedPhoto && <Modal>
                <ModalDetail>
                    <Close onClick={handleOnClose}>&times;</Close>
                    <p>{selectedPhoto.title}</p>
                    <LargeImage src={selectedPhoto.url}/>
                </ModalDetail>
            </Modal>}
        </>
    );
}

export default AlbumContainer;