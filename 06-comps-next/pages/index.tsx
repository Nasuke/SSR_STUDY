import Head from "next/head"
import variables from "../styles/variable.module.scss"
import style from "./index.module.scss"
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <p>全局样式</p>
      <p style={{ color: `${variables.primaryColor}` }}>scss导出的变量</p>
      <p style={{ color: `${style.primaryColor}` }}>内部样式</p>
      <div className={style['border']}>内部样式的include</div>

      <Image src={"/circularlinkedlist.png"} width={150} height={150} alt="des"></Image>
      <div className={style.bc}>ss</div>
    </div>
  )
}