import { FC, useEffect } from "react"
import { notification } from "antd"
import { NotificationType } from "../../App"


interface Props {
  type?: NotificationType,
  message?: string
}

export const CustomNoti: FC<Props> = ({ type, message }) => {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    type && api[type]({
      message: message,
      showProgress: true,
    });
  }, [type, message])

  return (
    <>{contextHolder}</>
  )
}