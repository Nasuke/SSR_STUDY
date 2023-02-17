import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Favor: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="Favor">
      <div>Favor</div>
    </div>
  )
})

export default Favor

Favor.displayName = "Favor"  //方便之后调试