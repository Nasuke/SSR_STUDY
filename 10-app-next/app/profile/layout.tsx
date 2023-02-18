import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import Link from 'next/link';

interface IProps {
    children?: ReactNode
}

const Layout: FC<IProps> = memo((props) => {
    const { children } = props
    return (
        <div className="Layout">
            <Link href={'/profile/detail'}>To detail</Link>
            <Link href={'/profile/favor'}>To favor</Link>

            {children}
        </div>
    )
})

export default Layout

Layout.displayName = "Layout"  //方便之后调试