import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Category: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <div className="Category">
      <div>Category</div>
    </div>
  )
})

export default Category

Category.displayName = "Category"  //方便之后调试