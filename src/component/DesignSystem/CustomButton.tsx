import { Button } from 'antd';
import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode
  stretch?: Boolean
  size?: String
  style?: Object
  // any props that come into the component
}

export const CustomButton: FC<Props> = ({ children, stretch, size, style }, props) => {
  return (
    <Button
      className={`
      btn
      ${stretch && 'btn--stretched'}
      btn--${size}
    `}
      style={style}
    >
      {children}
    </Button>
  )
}