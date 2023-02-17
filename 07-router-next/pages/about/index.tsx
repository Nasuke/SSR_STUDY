import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const About: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="About">
      <div>About</div>
    </div>
  )
})

export default About

About.displayName = "About"  //方便之后调试