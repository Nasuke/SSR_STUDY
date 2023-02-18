import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import Link from 'next/link';



interface IProps {
    children?: ReactNode
}


const NestLayout: FC<IProps> = memo((props) => {
    const { children } = props
    return (
        <div className="NestLayout">
            {/* 嵌套布局模拟二级路由 */}
            <div>NestLayout</div>
            <Link href="/category">Category</Link>
            <Link href="/category/favor">To Favor</Link>
            {children}
        </div>
    )
})

export default NestLayout

NestLayout.displayName = "NestLayout"  //方便之后调试

