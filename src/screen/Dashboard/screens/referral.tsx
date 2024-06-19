import { CustomHeader } from "@component/DesignSystem/CustomHeader";
import { Col, Layout, Row, Space, Typography } from "antd";
import { SectionMiner } from "../SectionMiner";
import { SectionCheckout } from "../SectionCheckout";
import { SectionReferralProgram } from "../SectionReferralProgram";
const { Sider, Content } = Layout;

const { Title } = Typography


const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};


export const Referral = () => {
  return (
    <Layout className="dashboard">
      <CustomHeader />
      <Layout>
        <Sider width="15%" style={siderStyle}>
          Sider
        </Sider>
        <Content className="dashboard-content">
          <Title level={2}>Dashboard</Title>
          <Row gutter={24}>
            <Col lg={17} xl={15}>
              <Space direction="vertical" size="large">
                <SectionMiner />
                
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