import React from 'react'
import { format } from 'date-fns'

const createDate = (dateString) => {
    console.log('createDate', { dateString })
}

export default function APOD({ date, explanation, url, title }) {
    const dateString = new Date(date).toDateString(0)
    // TODO: 'FIX DATE FORMATTING'

    // console.log(date, dateString, new Date(date))
    // // console.log('test', format(date, 'YYYY'))
    // const createdDate = createDate(date)
    // console.log({ createdDate })
    // // const formatted = format(createDate, 'YYYY')
    // // console.log(formatted)
    return (
        <>
            <h3>{title}</h3>
            <p>{dateString}</p>
            <img src={url} alt="APOD pic" style={{ width: '100%' }}/>
            <p style={{ textAlign: 'justify', padding: '0 1rem' }}>&nbsp;&nbsp;&nbsp;&nbsp;{explanation}</p>
        </>
    )
}