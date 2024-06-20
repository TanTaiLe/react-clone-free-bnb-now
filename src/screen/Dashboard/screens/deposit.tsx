import { Col, Row, Space, Typography } from "antd";
import { SectionMiner } from "../SectionMiner";
import { SectionCheckout } from "../SectionCheckout";
import { SectionReferralProgram } from "../SectionReferralProgram";
import { SectionDepositBNB } from "../SectionDepositBNB";
import { SectionDepositHistory } from "../SectionDepositHistory";
import { DashboardLayout } from "../DashboardLayout";

const { Title } = Typography

export const Deposit = () => {
  return (
    <DashboardLayout>
      <Title level={2}>Deposit</Title>
      <Row gutter={24} className="dashboard-row">
        <Col lg={17} xl={15}>
          <Space direction="vertical" size="large">
            <SectionMiner />
            <SectionDepositBNB />
            <SectionDepositHistory />
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