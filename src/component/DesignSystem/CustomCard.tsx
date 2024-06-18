import { Card } from "antd"
import { FC, ReactNode } from "react"

interface Props {
  children?: ReactNode
  style?: object
  className?: string
  title?: any
  extra?: ReactNode
  nobody?: boolean
  // any props that come into the component
}

export const CustomCard: FC<Props> = ({ children, className, title, extra, nobody }) => {
  return (
    <Card title={title} extra={extra} className={`card ${className} ${nobody && 'nobody'}`}>
      {children}
    </Card>
  )
}