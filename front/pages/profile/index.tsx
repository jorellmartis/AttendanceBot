import React,{ReactElement, useState}from 'react'
import { NextPage } from 'next'
import Sidebar from '../../components/Sidebar'
import {  PageBlock } from '../../styles/reusable/Wrappers'
import PageBanner from '../../components/PageBanner'
import SearchBar from '../../components/SearchBar'



type Props = {
  pageID: string
}

type UserPageWithLayout = NextPage<Props> & {
  getLayout: (page: ReactElement) => ReactElement;
}
const Index : UserPageWithLayout = ({}) => {
  return (
    <PageBlock>
      <PageBanner/>
    </PageBlock>
  )
}

export default Index

Index.getLayout =  (page: ReactElement) => {
  return(
    <>
      <Sidebar/>
      <SearchBar/>
      <>{page}</>
    </>
  )
}