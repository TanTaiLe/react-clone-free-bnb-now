import { Layout, Button, Flex, Image, Typography, Col, Row, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { trans } from "@language/index.ts";
import { CustomSection } from "@component/DesignSystem/CustomSection";
import { SigninForm } from "./SigninForm";

const { Content } = Layout;
const { Text, Link, Title } = Typography;


export const Home = () => {
  const navigate = useNavigate();
  return (
    // <div>
    //   <h1>Home</h1>
    //   <Button type={"primary"} onClick={() => navigate('/dashboard')}>{trans('button.go_to_dashboard')}</Button>
    // </div>
    <Layout>
      <header className="header">
        <div className="container">
          <Flex justify="space-between" align="center">
            <Link href="/">
              <Image
                preview={false}
                width={100}
                src="/sample-logo.png"
              />
            </Link>

            <Text className="header-contact">
              Contact:
              <Link href="mailto:contacts@freebnbnow.com">
                contacts@freebnbnow.com
              </Link>
            </Text>
          </Flex>
        </div>
      </header>
      <Content>
        <CustomSection>
          <Row align="middle">
            <Col span={8}>
              <Image
                preview={false}
                width={'100%'}
                src="/coin.png"
              />
            </Col>
            <Col span={13} offset={3}>
              <SigninForm />
            </Col>
          </Row>
        </CustomSection>
      </Content>
    </Layout >
  );
}