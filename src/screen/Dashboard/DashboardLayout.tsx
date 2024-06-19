import { CustomHeader } from "@component/DesignSystem/CustomHeader"
import { CustomSideMenu } from "@component/DesignSystem/CustomSideMenu"
import { Layout } from "antd"
import { FC, ReactNode } from "react"

interface Props {
  children?: ReactNode
}

const { Content } = Layout

export const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <Layout className="dashboard">
      <CustomHeader />
      <Layout>
        <CustomSideMenu />
        <Content className="dashboard-content">
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}