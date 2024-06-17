import { FC } from "react";
import type { FormProps } from 'antd';
import { useNavigate } from "react-router-dom";
import { Typography, Row, Col, Flex, Image } from 'antd';
import { Form, Input } from 'antd';
import { trans } from "@language/index.ts";
import { CustomButton } from "@component/DesignSystem/CustomButton";


const { Text, Link, Title } = Typography;

type FieldType = {
  address?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);

};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const SigninForm: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="signin">
      <Title>GET FREE 7 TH/S</Title>
      <Text className="signin-intro">Type your BNB Smart Chain (BEP20) Or <Link href="https://faucetpay.io/?r=6120747">Faucetpay.io</Link> address.</Text>
      <Form
        name="signin"
        layout="inline"
        initialValues={{ remember: true }}
        onFinish={() => navigate('/dashboard')}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row style={{ width: '100%' }}>
          <Col span={16}>
            <Form.Item<FieldType>
              name="address"
              help="Minimal withdrawal: 0.0000001 BNB"
            >
              <Input placeholder="0xCc8E6d00C17eB431350C6c50XXX" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <CustomButton
              stretch
              size="lg"
              style={{ fontWeight: 700 }}
              htmlType="submit"
            >
              Start Mining Now
            </CustomButton>
          </Col>
        </Row>
      </Form>
      <div className="signin-social">
        <Text>Follow us on</Text>
        <Flex>
          <Link href="https://x.com/freebnbnow">
            <Image
              preview={false}
              src="/images/twitter.png"
            />
          </Link>
          <Link href="https://t.me/freebnbnowcom">
            <Image
              preview={false}
              src="/images/telegram.png"
            />
          </Link>
        </Flex>
      </div>
    </div>
  )
}