import { FC } from "react";
import type { FormProps } from 'antd';
import { Typography, Row, Col, Flex, Image } from 'antd';
import { Button, Form, Input } from 'antd';
import { CustomButton } from "@component/DesignSystem/CustomButton";


const { Text, Link, Title } = Typography;

type FieldType = {
  username?: string;
};

// const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
//   console.log('Success:', values);
// };

// const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

export const SigninForm: FC = () => {
  return (
    <div className="signin">
      <Title>GET FREE 7 TH/S</Title>
      <Text className="signin-intro">Type your BNB Smart Chain (BEP20) Or <Link href="https://faucetpay.io/?r=6120747">Faucetpay.io</Link> address.</Text>
      <Form
        name="signin"
        layout="inline"
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row style={{ width: '100%' }}>
          <Col span={16}>
            <Form.Item<FieldType>
              name="username"
              help="Minimal withdrawal: 0.0000001 BNB"
            >
              <Input placeholder="0xCc8E6d00C17eB431350C6c50XXX" />
            </Form.Item>
          </Col>
          <Col span={8}>
            {/* <Button style={{ width: '100%' }} type="primary" htmlType="submit">
              Start Mining Now
            </Button> */}
            <CustomButton stretch size="lg" style={{ fontWeight: 700 }}>
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
              src="/twitter.png"
            />
          </Link>
          <Link href="https://t.me/freebnbnowcom">
            <Image
              preview={false}
              src="/telegram.png"
            />
          </Link>
        </Flex>
      </div>
    </div>
  )
}