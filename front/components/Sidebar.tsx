import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const SidebarBlock = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 20vw;
    height: 100vh;
    background: red;
`
const SidebarHeader = styled.div`
    width: 100%;
    height: 10%;
    background: green;
    min-height: 100px;
`
const SidebarBody = styled.div`
    text-align: center;
    width: 100%;
    height: 80%;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`
const SidebarFooter = styled.div`
    text-align: center;
    width: 100%;
    height: 20%;
    background: pink;
`
const Sidebar = () => {
    return (
    <SidebarBlock>
        <SidebarHeader>
            <Link href='/'>Logo</Link>
        </SidebarHeader>
        <SidebarBody>
            <ul>
                <Link href='/profile'>
                    <li>Menu Item 1</li>
                </Link>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
            </ul>         
        </SidebarBody>
        <SidebarFooter>
            Logout button
        </SidebarFooter>
    </SidebarBlock>
    )
}

export default Sidebar