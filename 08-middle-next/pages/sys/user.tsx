import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="User">
      <div>User</div>
    </div>
  )
})

export default User

User.displayName = "User"  //方便之后调试