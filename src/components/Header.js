import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    width: 100%;
    background-color: #14223f;
    position: fixed;
    top: 0;

    & > img {
        width: 150px;
        height: 63.5px;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <img src="https://apollo-13.eu/wp-content/uploads/2018/04/nasa-apod-300x127-300x127.jpg" alt="APOD logo" /> 
        </StyledHeader>
    )
}