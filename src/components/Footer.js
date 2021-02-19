import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    & a {
        color: ${props => props.theme.primaryColor};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>&copy; 2021 - <a href="https://github.com/lindellcarternyc" target="_blank" rel="noopener noreferrer">Lindell Carter</a></p>
        </StyledFooter>
    )
}