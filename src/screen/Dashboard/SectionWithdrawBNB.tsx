import { CustomButton } from "@component/DesignSystem/CustomButton"
import { CustomCard } from "@component/DesignSystem/CustomCard"
import { Col, Flex, Form, Input, Row, Select, Space, Typography } from "antd"
import { FC } from "react"

type FieldType = {
  amount?: number;
};

const { Text, Title } = Typography
const { Option } = Select

export const SectionWithdrawBNB: FC = () => {
  return (
    <CustomCard title="Withdraw BNB">
      <Form name="withdrawBNB" layout="inline">
        <Space direction="vertical" size="large">
          <Row align="middle" style={{ width: '100%' }}>
            <Col span={6}>
              <Text strong>Network</Text>
            </Col>
            <Col span={18}>
              <Select defaultValue="1" style={{ width: '100%', height: 45 }}>
                <Option value="1">BNB Smart Chain</Option>
              </Select>
            </Col>
          </Row>
          <Row align="middle" style={{ width: '100%' }}>
            <Col span={6}>
              <Text strong>Amount</Text>
            </Col>
            <Col span={18}>
              <Space size="small" direction="vertical">
                <Row align="middle" gutter={8}>
                  <Col xl={20}>
                    <Form.Item<FieldType>
                      name="amount"
                      style={{ width: '100%' }}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col xl={4}>
                    <CustomButton stretch type={3}>Max</CustomButton>
                  </Col>
                </Row>
                <Row className="checkout" gutter={[8, 8]} style={{ width: '100%' }}>
                  <Col xl={13} lg={12}>
                    <Flex>
                      <Text className="checkout-label checkout-label-width-auto">Your Balance:</Text>
                      <Text strong className="checkout-value">0.000000789840 BNB</Text>
                    </Flex>
                  </Col>
                  <Col xl={11} lg={12}>
                    <Flex>
                      <Text className="checkout-label checkout-label-width-auto">Minimal withdrawal:</Text>
                      <Text strong className="checkout-value">0.0002 BNB</Text>
                    </Flex>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
          <Row align="middle" style={{ width: '100%' }}>
            <Col span={6}>
              <Text strong>Fee</Text>
            </Col>
            <Col span={18}>
              <Text strong>0.00015 BNB</Text>
            </Col>
          </Row>
          <Row align="middle" style={{ width: '100%' }}>
            <Col span={6}>
              <Text strong>Receive amount</Text>
            </Col>
            <Col span={18}>
              <Text strong className="highlight">0 BNB</Text>
            </Col>
          </Row>
          <Row align="middle" style={{ width: '100%' }}>
            <Col span={18} offset={6}>
              <CustomButton>Withdraw</CustomButton>
            </Col>
          </Row>
        </Space>
      </Form>
    </CustomCard>
  )
}