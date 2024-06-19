import { CustomButton } from "@component/DesignSystem/CustomButton"
import { CustomCard } from "@component/DesignSystem/CustomCard"
import { Col, Form, Row, Select, Space, Typography } from "antd"
import { FC } from "react"

const { Text } = Typography
const { Option } = Select

const createDepositAddress = () => {

}

export const SectionDepositBNB: FC = () => {
  return (
    <CustomCard title="Deposit BNB">
      <Form name="depositBNB" layout="inline" style={{ background: 'none', padding: 0 }}>
        <Space direction="vertical" size="large">
          <Row align="middle" style={{ width: '100%' }}>
            <Col span={6}>
              <Text strong>1. Network</Text>
            </Col>
            <Col span={12}>
              <Select defaultValue="1" style={{ width: '100%', height: 45 }}>
                <Option value="1">BNB Smart Chain</Option>
              </Select>
            </Col>
          </Row>
          <Row align="middle" style={{ width: '100%' }}>
            <Col span={6}>
              <Text strong>2. Deposit address</Text>
            </Col>
            <Col span={12}>
              <CustomButton stretch onClick={createDepositAddress}>
                Create your deposit address
              </CustomButton>
            </Col>
          </Row>
        </Space>
      </Form>
    </CustomCard>
  )
}