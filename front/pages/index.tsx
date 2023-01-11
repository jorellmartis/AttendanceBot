import React,{ReactElement}from 'react'
import { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import {  PageBlock } from '../styles/reusable/Wrappers'
import PageBanner from '../components/PageBanner'
import PunchCard from '../components/dashboard/PunchCard'
import SearchBar from '../components/SearchBar'
import Overview from '../components/dashboard/Overview'
import DasboardComponents from '../components/dashboard/DasboardComponents'

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
      <Overview/>
      <PunchCard/>
      <DasboardComponents/>
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