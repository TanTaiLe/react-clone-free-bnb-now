import { Button } from 'antd';
import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode
  stretch?: boolean
  size?: string
  style?: object
  htmlType?: any
  type?: number
  iconOnly?: boolean
  // any props that come into the component
}

export const CustomButton: FC<Props> = ({ children, stretch, size, style, htmlType, type, iconOnly }) => {
  return (
    <Button
      className={`
      btn
      ${stretch && 'btn--stretched'}
      ${type && `btn-type-${type}`}
      ${size && `btn--${size}`}
      ${iconOnly && 'btn-icon'}
    `}
      style={style}
      htmlType={htmlType}
    >
      {children}
    </Button>
  )
}