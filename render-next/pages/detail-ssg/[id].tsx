import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import type { GetStaticPaths, GetStaticProps } from 'next';
import { fetchBooks, fetchBookDetail } from '../../server/book';

interface IProps {
  children?: ReactNode,
  book?: any
}

const Detail: FC<IProps> = memo((props) => {
  const { children, book } = props
  return (
    <div className="Detail">
      <div>Detail</div>
      <div>{book.name}</div>
    </div>
  )
})

export default Detail

Detail.displayName = "Detail"  //方便之后调试

// SSG的第三种方式 path+变量
// 多了一个函数
export const getStaticPaths: GetStaticPaths = async (context) => {
  const res = await fetchBooks()
  const ids = res.data.books.map((item: any) => ({
    params: {
      id: item.id + "", // string
    }
  }))
  return {
    paths: ids || [], // 必须是数组类型 用于匹配有哪些动态路由
    fallback: false // 没有匹配返回404
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetchBookDetail(context.params?.id as string)
  return {
    props: {
      book: res.data.book,
    }
  }
}