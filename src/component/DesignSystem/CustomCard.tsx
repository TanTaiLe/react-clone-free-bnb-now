import { Card } from "antd"
import { FC, ReactNode } from "react"

interface Props {
  children?: ReactNode
  style?: Object
  className?: String
  title?: any
  // any props that come into the component
}

export const CustomCard: FC<Props> = ({ children, className, title }) => {
  return (
    <Card title={title} className={`card ${className}`}>
      {children}
    </Card>
  )
}