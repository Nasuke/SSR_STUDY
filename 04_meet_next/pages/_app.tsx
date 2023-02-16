import '@/styles/globals.css'
import type { AppProps } from 'next/app'


/**
 * 
 * 1. Layout
 * 2. Redux
 * 3. Theme
 * 4. 监听全局路由 
 * 
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
