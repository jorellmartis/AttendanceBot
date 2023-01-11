import styled from "styled-components";
import React from 'react'

const DashboardComponentsBlock = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
const SmallComp = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 40%;
    background: papayawhip;
    border-radius: 40px;
    max-width: 800px;
`
const LargeComp = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    background: paleturquoise;
`
const DasboardComponents = () => {
    return (
    <DashboardComponentsBlock>
        <SmallComp>
            Component1
        </SmallComp>
        <SmallComp>
            Component2
        </SmallComp>
        <LargeComp>
            Large Comp
        </LargeComp>
    </DashboardComponentsBlock>
    )
}

export default DasboardComponents