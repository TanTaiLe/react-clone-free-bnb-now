import { FC, useContext, useEffect, useState } from "react"
import { Menu } from "antd"
import type { MenuProps } from 'antd';
import { useLocation, useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { NotiContext } from "../../App";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '/dashboard',
    label: 'Dashboard',
  }, {
    key: '/dashboard/rewards',
    label: 'Rewards',
  }, {
    key: '/dashboard/deposit',
    label: 'Deposit',
  }, {
    key: '/dashboard/withdraw',
    label: 'Withdraw',
  }, {
    key: '/dashboard/buy-power',
    label: 'Buy Power',
  }, {
    key: '/dashboard/referral',
    label: 'Referral',
  }, {
    key: 'faqs',
    label: 'FAQs',
  }, {
    key: 'contact',
    label: 'Contact'
  }, {
    key: 'logout',
    label: 'Logout'
  }
]

export const CustomMenu: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuItems, setMenuItems] = useState<MenuItem[]>()
  const { setNoti } = useContext(NotiContext);
  console.log(window.innerWidth)
  useEffect(() => {
    if (window.innerWidth > 575)
      setMenuItems(items.slice(0, 7))
    else
      setMenuItems(items)
  }, [window.innerWidth])

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    if (e.key == 'faqs')
      window.open('https://faq.freebnbnow.com/', '_blank')
    else if (e.key == 'contact')
      window.location.replace('mailto:contacts@freebnbnow.com')
    else if (e.key == 'logout') {
      setNoti({ type: 'success', message: 'Log out successfully!' })
      navigate('/')
    } else
      navigate(e.key)

  };
  return (
    <Menu
      onClick={onClick}
      mode="horizontal"
      defaultSelectedKeys={[location.pathname]}
      items={menuItems}
      style={{ flex: 1, minWidth: 0 }}
      overflowedIndicator={<MenuOutlined style={{ fontSize: 32, marginTop: 16 }} />}
    />
  )
}