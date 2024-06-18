import { CustomHeader } from "@component/DesignSystem/CustomHeader";
import { Col, Layout, Row, Space, Typography } from "antd";
import { SectionMiner } from "./SectionMiner";
import { SectionSurvey } from "./SectionSurvey";
import { SectionPowerPackages } from "./SectionPowerPackages";
const { Sider, Content } = Layout;

const { Title } = Typography


const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};


export const Dashboard = () => {
  return (
    <Layout className="dashboard">
      <CustomHeader />
      <Layout>
        <Sider width="15%" style={siderStyle}>
          Sider
        </Sider>
        <Content className="dashboard-content">
          <Title level={2}>Dashboard</Title>
          <Row>
            <Col span={17}>
              <Space direction="vertical" size="large">
                <SectionMiner />
                <SectionSurvey />
                <SectionPowerPackages />
              </Space>
            </Col>

            <Col span={7}>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}