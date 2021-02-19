import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Container, { StyledContainer } from './Container'
import Footer from './Footer'

const StyledLayout = styled.div`
    & > ${StyledContainer} {
        margin-top: 75px;
    }
`

const Layout = ({ children }) => {
    return (
        <StyledLayout>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </StyledLayout>
    )
}

export default Layout