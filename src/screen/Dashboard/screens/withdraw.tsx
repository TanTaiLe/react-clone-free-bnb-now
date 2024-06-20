import { Col, Row, Space, Typography } from "antd";
import { SectionMiner } from "../SectionMiner";
import { SectionCheckout } from "../SectionCheckout";
import { SectionReferralProgram } from "../SectionReferralProgram";
import { SectionWithdrawBNB } from "../SectionWithdrawBNB";
import { SectionWithdrawHistory } from "../SectionWithdrawHistory";
import { DashboardLayout } from "../DashboardLayout";

const { Title } = Typography

export const Withdraw = () => {
  return (
    <DashboardLayout>
      <Title level={2}>Withdraw</Title>
      <Row gutter={24} className="dashboard-row">
        <Col lg={17} xl={15}>
          <Space direction="vertical" size="large">
            <SectionMiner />
            <SectionWithdrawBNB />
            <SectionWithdrawHistory />
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