import styled from 'styled-components';

export const Image = styled.img`
    height: 50px;
    width: 50px;
`
export const LargeImage = styled.img`
height: 90%;
width: 90%;
`
export const Modal = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 90%; /* Full width */
    height: 90%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`
export const ModalDetail = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`

export const Close = styled.span`
    cursor: pointer;
`