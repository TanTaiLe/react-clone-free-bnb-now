import { Card, Col, Row, Space, Typography } from "antd"
import { FC } from "react"
import { CustomButton } from "@component/DesignSystem/CustomButton"
import { CustomCard } from "@component/DesignSystem/CustomCard"

const { Text } = Typography

export const SectionMiner: FC = () => {
  return (
    <CustomCard title="Your miner">
      <Row gutter={24}>
        <Col span={8}>
          <Card>
            <Space direction="vertical" size="middle">
              <Space direction="vertical" size="small">
                <Text>BNB to Harvest</Text>
                <Text strong>0.000000727055 BNB</Text>
              </Space>
              <CustomButton stretch>
                Harvest
              </CustomButton>
            </Space>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Space direction="vertical" size="middle">
              <Space direction="vertical" size="small">
                <Text>Your Daily Profit</Text>
                <Text strong>0 BNB</Text>
              </Space>
              <CustomButton stretch>
                Buy TH/S
              </CustomButton>
            </Space>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Space direction="vertical" size="middle">
              <Space direction="vertical" size="small">
                <Text>Mining Speed</Text>
                <Text strong>7 TH/S</Text>
              </Space>
              <CustomButton stretch>
                History
              </CustomButton>
            </Space>
          </Card>
        </Col>
      </Row>
    </CustomCard>
  )
}