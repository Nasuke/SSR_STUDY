import React, { memo } from 'react';
import type { FC, ReactNode, ReactElement } from "react"
import Layout from '@/components/layout';
import NestLayout from '@/components/nest-layout';

interface IProps {
  children?: ReactNode
}

interface IStaticProp {
    getLayout?: (page: ReactElement) => ReactNode
}

const Favor: FC<IProps> & IStaticProp = memo((props) => {
  const { children } = props
  return (
    <div className="Favor">
      <div>Favor</div>
    </div>
  )
})

export default Favor

Favor.displayName = "Favor"  //方便之后调试

Favor.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            <NestLayout>
                {page}
            </NestLayout>
        </Layout>
    )
}