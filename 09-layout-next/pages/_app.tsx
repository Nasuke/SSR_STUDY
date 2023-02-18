
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '@/components/layout'
import NestLayout from '../components/nest-layout/index';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {

  let cn = Component.displayName
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    getLayout(<Component {...pageProps} />)
  )
  
  
  
  
  
  
  
  
  
  
  
  
  // 1. 这种方式实现嵌套会有很多重复代码
  // if (cn === "Category") {
  //   return (
  //     <Layout>
  //       <NestLayout>
  //         <Component {...pageProps} />
  //       </NestLayout>
  //     </Layout>
  //   )
  // } else if (cn === "Profile") {
  //   return (
  //     <Layout>
  //       <Component {...pageProps} />
  //     </Layout>
  //   )
  // } else {
  //   return <Component {...pageProps} />
  // }


}
