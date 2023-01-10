import styled from "styled-components";
import React from 'react'

const PunchCardBlock = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    background: palegreen;
`

const PunchCard = () => {
    return (
    <PunchCardBlock>
        PunchCard here
    </PunchCardBlock>
    )
}

export default PunchCard