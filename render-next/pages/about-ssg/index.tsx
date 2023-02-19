import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// 1. 不依赖外部数据
// 2. pnpm build后会在.next/server/pages/about-ssg.html
const AboutSSG: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="AboutSSG">
      <div>AboutSSG</div>
    </div>
  )
})

export default AboutSSG

AboutSSG.displayName = "AboutSSG"  //方便之后调试