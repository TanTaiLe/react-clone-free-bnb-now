import { FC, useEffect, useLayoutEffect, useRef, useState } from "react"
import { notification } from "antd"
import { NotificationType } from "../../App"


interface Props {
  type?: NotificationType,
  message?: string
}

const notiBg = {
  success: '#B7EB8F',
  info: '#91CAFF',
  error: '#FFA39E',
  warning: '#FFE58F'
}

export const CustomNoti: FC<Props> = ({ type, message }) => {
  const [api, contextHolder] = notification.useNotification();
  const firstUpdate = useRef(false);

  useLayoutEffect(() => {
    if (!firstUpdate.current) {
      firstUpdate.current = true;
      console.log(type)
      type && api[type]({
        message: message,
        className: 'noti',
        pauseOnHover: true,
        showProgress: true,
        style: {
          backgroundColor: notiBg[type]
        }
      });
    }
  }, [type])

  return (
    <>{contextHolder}</>
  )
}