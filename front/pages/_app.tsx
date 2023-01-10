import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ReactElement } from 'react'
import { NextPage } from 'next'
import { LayoutBlock } from '../styles/reusable/Wrappers'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page )
  return(
    <>
    <LayoutBlock>
    {getLayout(<Component {...pageProps} />)}
    </LayoutBlock>
    </>
  )

}
