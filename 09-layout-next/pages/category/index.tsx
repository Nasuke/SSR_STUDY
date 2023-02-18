import React, { memo, ReactElement } from 'react';
import type { FC, ReactNode } from "react"
import Layout from '@/components/layout';
import NestLayout from '@/components/nest-layout';

interface IProps {
  children?: ReactNode
}

interface IStaticProp {
  getLayout?: (page: ReactElement) => ReactNode
}

const Category: FC<IProps> & IStaticProp = memo((props) => {
  const { children } = props
  return (
    <div className="Category">
      <div>Category</div>
    </div>
  )
})

export default Category

Category.displayName = "Category"  //方便之后调试

Category.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestLayout>
        { page }
      </NestLayout>
    </Layout>
  )
}