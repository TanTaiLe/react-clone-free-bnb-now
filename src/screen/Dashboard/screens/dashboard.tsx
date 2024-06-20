import { Col, Row, Space, Typography } from "antd";
import { SectionMiner } from "../SectionMiner";
import { SectionSurvey } from "../SectionSurvey";
import { SectionPowerPackages } from "../SectionPowerPackages";
import { SectionBuyPower } from "../SectionBuyPower";
import { SectionCheckout } from "../SectionCheckout";
import { SectionReferralProgram } from "../SectionReferralProgram";
import { DashboardLayout } from "../DashboardLayout";

const { Title } = Typography

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <Title level={2}>Dashboard</Title>
      <Row gutter={24}>
        <Col lg={17} xl={15}>
          <Space direction="vertical" size="large">
            <SectionMiner />
            <SectionSurvey />
            <SectionPowerPackages />
            <SectionBuyPower />
          </Space>
        </Col>
        <Col sm={24} lg={7} xl={9}>
          <Space direction="vertical" size="large">
            <SectionCheckout />
            <SectionReferralProgram />
          </Space>
        </Col>
      </Row>
    </DashboardLayout>
  );
}