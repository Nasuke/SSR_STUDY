import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import type { GetStaticProps } from 'next';
import { fetchBooks } from '../../server/book';

interface IProps {
    children?: ReactNode,
    books: any[]
}

//  1. 依赖外部数据有两种情况: 变量 | 路径+变量
//  2. 这里是第一种
//
const BooksSSG: FC<IProps> = memo((props) => {
    const { children, books } = props
    return (
        <div className="BooksSSG">
            <ul>
                {
                    books.map(item => {
                        return (
                            <li key={item.name}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
})

export default BooksSSG

BooksSSG.displayName = "BooksSSG"  //方便之后调试

export const getStaticProps: GetStaticProps = async (context) => {
    // 执行build会就会执行该函数 并且只在server端执行

    let count = Math.floor(Math.random() * 10) + 1
    const res = await fetchBooks(count)   
    return {
        props: {
            books: res.data.books,
        },
        // 如果添加了该属性就变成了ISR的渲染模式
        // 在ssg的基础上 每隔10s重新
        revalidate: 5 // s
    }

    
}