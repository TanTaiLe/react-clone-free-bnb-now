import { Menu, MenuProps, Image, Layout } from "antd"
import { FC, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '/dashboard',
    label: 'Dashboard',
    icon: <Image preview={false} src="/images/dashboard/dashboard.png" width={24} />
  }, {
    key: '/dashboard/rewards',
    label: 'Rewards',
    icon: <Image preview={false} src="/images/dashboard/rewards.png" width={24} />
  }, {
    key: '/dashboard/deposit',
    label: 'Deposit',
    icon: <Image preview={false} src="/images/dashboard/deposit.png" width={24} />
  }, {
    key: '/dashboard/withdraw',
    label: 'Withdraw',
    icon: <Image preview={false} src="/images/dashboard/withdraw.png" width={24} />
  }, {
    key: '/dashboard/buy-power',
    label: 'Buy Power',
    icon: <Image preview={false} src="/images/dashboard/buy-power.png" width={24} />
  }, {
    key: '/dashboard/referral',
    label: 'Referral',
    icon: <Image preview={false} src="/images/dashboard/referral.png" width={24} />
  }, {
    key: 'faqs',
    label: 'FAQs',
    icon: <Image preview={false} src="/images/dashboard/faqs.png" width={24} />
  }
]

export const CustomSideMenu: FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    if (e.key == 'faqs')
      window.open('https://faq.freebnbnow.com/', '_blank')
    else
      navigate(e.key)
  };

  return (
    <Sider className="sider" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
        items={items}
        inlineCollapsed={true}
        style={{ height: 'calc(100vh - 52px)' }}
      />
    </Sider>
  )
}