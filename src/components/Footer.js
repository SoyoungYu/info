import React from 'react'
import styled from 'styled-components'

const StyleFooter = styled.div`
    height: 70px;
    background: pink;
    text-align: center;
`

const Footer = () => {
    return (
        <StyleFooter>
            <h1>
                { new Date().getFullYear() } - { new Date().getMonth() + 1 }
            </h1>
        </StyleFooter>
    )
}

export default Footer