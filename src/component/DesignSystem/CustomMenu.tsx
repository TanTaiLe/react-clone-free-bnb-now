import { FC } from "react"
import { Menu } from "antd"
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];


const dashboardMenu: MenuItem[] = [
  {
    key: 1,
    label: 'Dashboard',
    path: '/Dashboard',
    iconSrc: '/images/dashboard/dashboard.png'
  }, {
    key: 2,
    label: 'Rewards',
    path: '/Dashboard/Rewards',
    iconSrc: '/images/dashboard/rewards.png'
  }, {
    key: 3,
    label: 'Deposit',
    path: '/Dashboard/Deposit',
    iconSrc: '/images/dashboard/depost.png'
  }, {
    key: 4,
    label: 'Withdraw',
    path: '/Dashboard/Withdraw',
    iconSrc: '/images/dashboard/withdraw.png'
  }, {
    key: 5,
    label: 'Buy Power',
    path: '/Dashboard/BuyPower',
    iconSrc: '/images/dashboard/buy-power.png'
  }, {
    key: 6,
    label: 'Referral',
    path: '/Dashboard/Referral',
    iconSrc: '/images/dashboard/referral.png'
  }, {
    key: 7,
    label: 'FAQs',
    path: '',
    iconSrc: '/images/dashboard/faqs.png'
  }
]

export const CustomMenu: FC = () => {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      items={dashboardMenu}
      style={{ flex: 1, minWidth: 0 }}
    />
  )
}