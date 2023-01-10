import React from 'react'
import styled from 'styled-components'
const SearchBarBlock = styled.div`
    display: flex;
    width: 100%;
    height: 9vh;
    background: grey;
    margin-left: 20vw;
    min-height: 100px;
`
const SearchBar = () => {
  return (
    <SearchBarBlock>
      <input placeholder='just checking' id='check'/>
    </SearchBarBlock>
  )
}

export default SearchBar