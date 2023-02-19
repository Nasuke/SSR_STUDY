import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import type { GetServerSideProps } from 'next';
import { fetchBooks } from '@/server/book';

interface IProps {
    children?: ReactNode,
    books: any[]
}

const BooksSSR: FC<IProps> = memo((props) => {
    const { children, books } = props
    return (
        <div className="BooksSSR">
            <div>BooksSSR</div>
            <ul>
                {
                    books.map((item: any) => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
})

export default BooksSSR

BooksSSR.displayName = "BooksSSR"  //方便之后调试

// 每次访问页面都会回调
export const getServerSideProps: GetServerSideProps = async (context) => {
    let count = Math.floor(Math.random() * 10) + 1
    const res = await fetchBooks(count)

    return {
        props: {
            books: res.data.books
        }
    }
}