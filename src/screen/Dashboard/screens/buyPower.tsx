import { Col, Row, Space, Typography } from "antd";
import { SectionMiner } from "../SectionMiner";
import { SectionCheckout } from "../SectionCheckout";
import { SectionReferralProgram } from "../SectionReferralProgram";
import { SectionPowerPackages } from "../SectionPowerPackages";
import { SectionBuyPower } from "../SectionBuyPower";
import { SectionBuyPowerHistory } from "../SectionBuyPowerHistory";
import { DashboardLayout } from "../DashboardLayout";

const { Title } = Typography

export const BuyPower = () => {
  return (
    <DashboardLayout><Title level={2}>Buy power</Title>
      <Row gutter={24}>
        <Col lg={17} xl={15}>
          <Space direction="vertical" size="large">
            <SectionMiner />
            <SectionPowerPackages />
            <SectionBuyPower />
            <SectionBuyPowerHistory />
          </Space>
        </Col>
        <Col lg={7} xl={9}>
          <Space direction="vertical" size="large">
            <SectionCheckout />
            <SectionReferralProgram />
          </Space>
        </Col>
      </Row>
    </DashboardLayout>
  );
}