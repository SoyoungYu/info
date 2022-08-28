import React from 'react'
import styled from 'styled-components'

const bgcolor = 'pink';

const StyleHeader = styled.div`
    height: 70px;
    background: ${ bgcolor };
    margin: 0;
    padding: 0;
`

const StyleH1 = styled.h1`
    margin: 0;
    padding: 0;
    line-height: 70px;
    padding-left: 1em;
`

const Header = ({ title }) => {
    return (
        <StyleHeader>
            <StyleH1>{ title }</StyleH1>
        </StyleHeader>
    )
}

export default Header