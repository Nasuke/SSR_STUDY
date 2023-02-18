import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Profile: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="Profile">
      <div>Profile</div>
    </div>
  )
})

export default Profile

Profile.displayName = "Profile"  //方便之后调试