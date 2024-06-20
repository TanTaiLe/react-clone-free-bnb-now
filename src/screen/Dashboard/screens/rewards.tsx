import { Col, Row, Space, Typography, Image } from "antd";
import { SectionMiner } from "../SectionMiner";
import { SectionCheckout } from "../SectionCheckout";
import { SectionReferralProgram } from "../SectionReferralProgram";
import { SectionBitLabs } from "../SectionBitLabs";
import { SectionSurvey } from "../SectionSurvey";
import { SectionRewardHistory } from "../SectionRewardHistory";
import { DashboardLayout } from "../DashboardLayout";

const { Title, Link } = Typography

export const Rewards = () => {
  return (
    <DashboardLayout>
      <Title level={2}>Rewards</Title>
      <Row gutter={24} className="dashboard-row">
        <Col lg={17} xl={15}>
          <Space direction="vertical" size="large">
            <Space size="small" className="news">
              <Image preview={false} width={24} src="/images/dashboard/news.png" />
              <Link href="">HOT New generation Telegram wallet, built on BNB</Link>
            </Space>
            <SectionMiner />
            <SectionBitLabs />
            <SectionSurvey />
            <SectionRewardHistory />
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