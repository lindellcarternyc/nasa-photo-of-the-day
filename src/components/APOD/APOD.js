import React from 'react'
import styled from 'styled-components'

const formatDate = (dateString) => {
    const [y, m, d] = dateString.split('-')
    return new Date(`${m}/${d}/${y}`).toDateString()
}

const Wrapper = styled.div`
    h3 {
        font-size: 2.5rem;
        margin: 0;
        font-weight: 100;
    }

    & > img {
        width: 100%;
    }

    & > p:nth-of-type(2) {
        text-align: left;
    }
`

export default function APOD({ date, explanation, url, title }) {
    const dateString = formatDate(date)
    return (
        <Wrapper>
            <h3>{title}</h3>
            <p>{dateString}</p>
            <img src={url} alt="APOD pic" />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{explanation}</p>
        </Wrapper>
    )
}