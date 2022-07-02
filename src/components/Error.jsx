import React from 'react'
import styled from '@emotion/styled'

const Message = styled.div `
    background-color: #87322c;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    text-transform: uppercase;
    font-family:'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`
const Error = ({text}) => {
    return (
        <Message>
            {text}
        </Message>
    )
}

export default Error
