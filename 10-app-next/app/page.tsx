import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import Link from 'next/link';

interface IProps {
    children?: ReactNode
}

const Home: FC<IProps> = memo((props) => {
    const { children } = props
    return (
        <div className="Home">
            <div>Home</div>
        </div>
    )
})

export default Home

Home.displayName = "Home"  //方便之后调试