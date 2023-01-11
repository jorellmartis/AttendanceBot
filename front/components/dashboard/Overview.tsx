import React from 'react'
import styled from "styled-components";

const OverviewBlock = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    gap: 5%;
    background: yellow;
    padding: 0% 10%;
`
const StatusBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 33.3%;
    &:nth-child(1){
        background: gray;
    }
    &:nth-child(2){
        background: gray;
    }
    &:nth-child(3){
        background: gray;
    }
`

const Overview = () => {
    return (
    <OverviewBlock>
        <StatusBlock>
            Sick Leave
        </StatusBlock>
        <StatusBlock>
            Employee Detail
        </StatusBlock>
        <StatusBlock>
            Active Projects
        </StatusBlock>
    </OverviewBlock>
    )
}

export default Overview