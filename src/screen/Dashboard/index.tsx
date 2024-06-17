import { CustomButton } from "@component/DesignSystem/CustomButton";
import { CustomHeader } from "@component/DesignSystem/CustomHeader";
import { Card, Col, Layout, Row, Typography } from "antd";
const { Sider, Content } = Layout;

const { Title, Text } = Typography


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
        <Sider width="18%" style={siderStyle}>
          Sider
        </Sider>
        <Content className="dashboard-content">
          <Title level={2}>Dashboard</Title>
          <Row>
            <Col span={15}>
              <Card title="Your miner">
                <Row gutter={24}>
                  <Col span={8}>
                    <Card>
                      <Text>BNB to Harvest</Text>
                      <Text strong>0.000000727055 BNB</Text>
                      <CustomButton stretch>
                        Harvest
                      </CustomButton>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card>
                      <Text>Your Daily Profit</Text>
                      <Text strong>0 BNB</Text>
                      <CustomButton stretch>
                        Buy TH/S
                      </CustomButton>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card>
                      <Text>Mining Speed</Text>
                      <Text strong>7 TH/S</Text>
                      <CustomButton stretch>
                        History
                      </CustomButton>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col span={9}>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}