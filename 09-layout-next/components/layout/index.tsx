import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
    children?: ReactNode
}

const Layout: FC<IProps> = memo((props) => {
    const { children } = props
    return (
        <div className="Layout">
            <div className="header">Head</div>
            {
                children
            }
            <div className="footer">Foot</div>
        </div>
    )
})

export default Layout

Layout.displayName = "Layout"  //方便之后调试