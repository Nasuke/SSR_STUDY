import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import { useRouter } from 'next/router';

interface IProps {
  children?: ReactNode
}

// 1. 捕获所有不匹配路由
// 2. 建立在pages根目录下
// 3. 如果在其它目录下 仅仅匹配该目录以及子目录

const NotFound: FC<IProps> = memo((props) => {
    const { children } = props
    
    const router = useRouter()
    const { slug } = router.query
    console.log(slug); // []
    
  return (
    <div className="NotFound">
          <div>NotFound</div>
          <h2>slug --- {slug}</h2>
          <h2>slug --- {JSON.stringify(slug)}</h2>
    </div>
  )
})

export default NotFound

NotFound.displayName = "NotFound"  //方便之后调试