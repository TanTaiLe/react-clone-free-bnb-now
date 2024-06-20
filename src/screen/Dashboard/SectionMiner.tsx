import { Card, Col, Row, Space, Typography } from "antd"
import { FC } from "react"
import { CustomButton } from "@component/DesignSystem/CustomButton"
import { CustomCard } from "@component/DesignSystem/CustomCard"

const { Text } = Typography

export const SectionMiner: FC = () => {
  return (
    <CustomCard title="Your miner" className='miner'>
      <Row gutter={24}>
        <Col xs={24} sm={8} span={8}>
          <Card className="card-custom">
            <Space direction="vertical" size="middle">
              <Space direction="vertical" size="small">
                <Text className="miner-label">BNB to Harvest</Text>
                <Text className="miner-value" strong>0.000000727055 BNB</Text>
              </Space>
              <CustomButton stretch>
                Harvest
              </CustomButton>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={8} span={8}>
          <Card className="card-custom">
            <Space direction="vertical" size="middle">
              <Space direction="vertical" size="small">
                <Text className="miner-label">Your Daily Profit</Text>
                <Text className="miner-value" strong>0 BNB</Text>
              </Space>
              <CustomButton stretch>
                Buy TH/S
              </CustomButton>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={8} span={8}>
          <Card className="card-custom">
            <Space direction="vertical" size="middle">
              <Space direction="vertical" size="small">
                <Text className="miner-label">Mining Speed</Text>
                <Text className="miner-value" strong>7 TH/S</Text>
              </Space>
              <CustomButton stretch type={2}>
                History
              </CustomButton>
            </Space>
          </Card>
        </Col>
      </Row>
    </CustomCard>
  )
}