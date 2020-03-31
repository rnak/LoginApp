import styled from "styled-components";
export const UserNav = styled.div`
    background-color: #333;
    overflow: hidden;
    cursor: pointer;
`;

export const AncorLeft = styled.a`
    background-color: ${(props) => props.active ? '#ddd' : '' };
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
        background-color: #ddd;
        color: black;
    }
`