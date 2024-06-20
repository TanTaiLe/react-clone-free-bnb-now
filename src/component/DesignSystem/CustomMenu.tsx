import { FC } from "react"
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
  }
]

export const CustomMenu: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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