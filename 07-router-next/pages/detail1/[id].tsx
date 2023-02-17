import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import { useRouter } from 'next/router';

interface IProps {
  children?: ReactNode
}

const Details1: FC<IProps> = memo((props) => {
    const { children } = props
    
    const router = useRouter()
    // router.query除了查询字符串参数之外 还可以拿到动态路由的params参数
    // 如果两者冲突 会优先使用动态路由参数
    const { id } = router.query
  return (
    <div className="Details1">
          <div>detail1 / {id}</div>
    </div>
  )
})

export default Details1

Details1.displayName = "Details1"  //方便之后调试