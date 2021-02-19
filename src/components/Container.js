import React from 'react'
import styled from 'styled-components'

export const StyledContainer = styled.div`
    width: 85%;
    margin: 0 auto;
`

export default function Container({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}