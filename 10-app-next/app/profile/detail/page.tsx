import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Detail: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="Detail">
      <div>Detail</div>
    </div>
  )
})

export default Detail

Detail.displayName = "Detail"  //方便之后调试