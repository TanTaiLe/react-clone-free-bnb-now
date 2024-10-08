import { CustomButton } from "@component/DesignSystem/CustomButton"
import { CustomCard } from "@component/DesignSystem/CustomCard"
import { Col, Flex, Form, FormProps, Input, Row, Space, Typography, Modal } from "antd"
import { FC, useEffect, useState } from "react"
import { ModalBonusProgram } from "./ModalBonusProgram"

const { Text } = Typography

type FieldType = {
  power?: number;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);

};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const SectionBuyPower: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moreBtnText, setMoreBtnText] = useState('More power with bonus program')

  useEffect(() => {
    window.innerWidth < 575 && setMoreBtnText('More program')
  }, [window.innerWidth])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CustomCard
        className="buy-power"
        title="Buy power"
        extra={<CustomButton onClick={showModal} type={3} size="sm">{moreBtnText}</CustomButton>}
      >
        <Form
          name="buyPower"
          layout="inline"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Space direction="vertical" size="middle">
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text>Enter the power you need to buy</Text>
              <Row style={{ width: '100%' }} align="middle" gutter={[0, 12]}>
                <Col md={16} sm={24} xs={15}>
                  <Form.Item<FieldType>
                    name="power"
                  >
                    <Input placeholder="Power amount" />
                  </Form.Item>
                </Col>
                <Col md={4} sm={24} xs={9}>
                  <Text italic strong className="input-tips">Min: 10TH/S</Text>
                </Col>
                <Col md={4} sm={24} xs={24}>
                  <CustomButton
                    htmlType="submit"
                    stretch
                  >
                    Buy now
                  </CustomButton>
                </Col>
              </Row>
            </Space>
            <Row className="checkout" gutter={[8, 8]}>
              <Col xl={10} lg={12} sm={24} xs={24}>
                <Flex>
                  <Text className="checkout-label">Total power:</Text>
                  <Text strong className="checkout-value">100 TH/S</Text>
                </Flex>
              </Col>
              <Col xl={10} lg={12} sm={24} xs={24}>
                <Flex>
                  <Text className="checkout-label">Bonus power:</Text>
                  <Text strong className="checkout-value">0 TH/S</Text>
                </Flex>
              </Col>
              <Col xl={10} lg={12} sm={24} xs={24}>
                <Flex>
                  <Text className="checkout-label">Daily Profit:</Text>
                  <Text strong className="checkout-value">0.000003013699 BNB</Text>
                </Flex>
              </Col>
              <Col xl={10} lg={12} sm={24} xs={24}>
                <Flex>
                  <Text className="checkout-label">Payment cost:</Text>
                  <Text strong className="checkout-value">0.001 BNB</Text>
                </Flex>
              </Col>
            </Row>
          </Space>
        </Form>
      </CustomCard>
      <ModalBonusProgram
        isModalOpen={isModalOpen}
        handleOk={handleOk}
      />
    </>
  )
}