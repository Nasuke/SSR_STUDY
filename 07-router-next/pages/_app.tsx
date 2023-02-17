import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  // 编程式导航
  const router = useRouter()
  
  // router.events.on监听
  useEffect(() => {
    // 两个事件url含义一致
    const handleRouterChange = (url: string) => {
      console.log('router-start:', url);
    } 
    const handleRouterComplete = (url: string) => {
      console.log('router-complete:', url);
    } 
    router.events.on("routeChangeStart", handleRouterChange)
    router.events.on("routeChangeComplete", handleRouterComplete)
    return () => {
      router.events.off("routeChangeStart", handleRouterChange)
      router.events.off("routeChangeComplete", handleRouterComplete)
    }
  }, [])

  return (
    <div className="router">
      <div className="nav">
        {/* 
            1. 这里的Link用href跳转 并非to!!!
            2. href支持 字符串 | 对象 {pathname:"", query:{}} | 外部连接
            3. as属性可以给路径别名 达到隐藏query的效果
            4. replace以替换的方式跳转 而不是添加到堆栈中 默认false
            5. target指定跳转方式
        */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/favor">Favor</Link>
        <Link href={{
          pathname: "category",
          query: {
            name: 'bob',
            age: 14
          }
        }} as="bazinga">Category</Link>

        <button onClick={() => router.push('/detail')}>read more</button>
        {/* 
           1. []前后不能有字符串
           2. 只能从react.query中获取  同名时query优先级低于params 
        */}
        <button onClick={() => router.push({
          pathname: "/detail1/100",
          query: {
            id: 10 // 测试query和params情况
          }
        })}>more about detail1</button>
        
      </div>

      {/* 类似router-view */}
      <Component {...pageProps} />
    </div>

    
  )
}
