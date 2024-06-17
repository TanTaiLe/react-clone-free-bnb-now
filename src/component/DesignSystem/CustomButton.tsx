import { Button } from 'antd';
import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode
  stretch?: Boolean
  size?: String
  style?: Object
  htmlType?: any
  // any props that come into the component
}

export const CustomButton: FC<Props> = ({ children, stretch, size, style, htmlType }, props) => {
  return (
    <Button
      className={`
      btn
      ${stretch && 'btn--stretched'}
      btn--${size}
    `}
      style={style}
      htmlType={htmlType}
    >
      {children}
    </Button>
  )
}