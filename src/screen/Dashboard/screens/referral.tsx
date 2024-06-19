import { CustomHeader } from "@component/DesignSystem/CustomHeader";
import { Col, Layout, Row, Space, Typography } from "antd";
import { SectionMiner } from "../SectionMiner";
import { SectionCheckout } from "../SectionCheckout";
import { SectionReferralProgram } from "../SectionReferralProgram";
import { SectionReferralLink } from "../SectionReferralLink";
import { SectionReferredUsers } from "../SectionReferredUsers";
const { Sider, Content } = Layout;

const { Title } = Typography



export const Referral = () => {
  return (
    <Layout className="dashboard">
      <CustomHeader />
      <Layout>
        <Sider className="sider">
          Sider
        </Sider>
        <Content className="dashboard-content">
          <Title level={2}>Referral</Title>
          <Row gutter={24}>
            <Col lg={17} xl={15}>
              <Space direction="vertical" size="large">
                <SectionMiner />
                <SectionReferralLink />
                <SectionReferredUsers />
              </Space>
            </Col>
            <Col lg={7} xl={9}>
              <Space direction="vertical" size="large">
                <SectionCheckout />
                <SectionReferralProgram />
              </Space>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}