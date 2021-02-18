import React from 'react'

export default function Container({ children, style }) {
    return (
        <div style={{
            width: '85%',
            margin: '0 auto',
            ...style
        }}>
            {children}
        </div>
    )
}