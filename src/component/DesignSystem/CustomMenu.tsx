import { FC, useEffect, useState } from "react"
import { Menu } from "antd"
import type { MenuProps } from 'antd';
import { useLocation, useNavigate } from "react-router-dom";

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
  const [menuItems, setMenuItems] = useState([])
  console.log(window.innerWidth)
  useEffect(() => {
    if (window.innerWidth > 575)
      setMenuItems(items.slice(-1, 2))
    else
      setMenuItems(items)
  }, [window.innerWidth])

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    e.key == 'faqs'
      ? window.open('https://faq.freebnbnow.com/', '_blank')
      : navigate(e.key)
  };
  return (
    <Menu
      onClick={onClick}
      mode="horizontal"
      defaultSelectedKeys={[location.pathname]}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  )
}