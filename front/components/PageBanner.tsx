import React from 'react'
import styled from 'styled-components'

const PageBannerBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 2% 2%;
  flex-direction: column;
  align-items: flex-start;
  h1{

  }
  p{

  }
`
const PageBanner = () => {
  return (
    <PageBannerBlock>
    <h1>Title</h1>
    <p>Breadcrumbs here</p>
    </PageBannerBlock>
  )
}

export default PageBanner