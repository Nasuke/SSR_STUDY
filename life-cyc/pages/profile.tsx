import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Profile: FC<IProps> = memo((props) => {
  const { children } = props

  console.log('function context');
    // 服务器端 只有function context
    // 客户端还有useEffect
    useEffect(() => {
        console.log('useEffect');
        return () => {
            console.log('un use');
        }
    })
  
  return (
    <div className="Profile">
      <div>Profile</div>
    </div>
  )
})

export default Profile

Profile.displayName = "Profile"  //方便之后调试