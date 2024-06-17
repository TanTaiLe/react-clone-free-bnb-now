import { Layout, Button, Flex, Image, Typography, Col, Row, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { trans } from "@language/index.ts";
import { CustomSection } from "@component/DesignSystem/CustomSection";
import { SigninForm } from "./SigninForm";

const { Content } = Layout;
const { Text, Link, Title } = Typography;

const features = [
  {
    img: '/feature-1.png',
    title: 'Instantly Withdraw',
    desc: 'You can withdraw your mined BNB instantly once you reach the minimum payment threshold, without any delays or freezing! BNB Smart Chain (BEP20).'
  }, {
    img: '/feature-2.png',
    title: 'Instantly Connect',
    desc: 'We are Simple, Add your BNB wallet address, Mining Start immediately. In case you upgrade, mining starts instantly once we confirmed payment.'
  }, {
    img: '/feature-3.png',
    title: 'No Maintenance Fees',
    desc: 'We are super transparent, No maintenance fees for premium plans. No hidden fees or commission. Everything is visible to you. Contact Us: contacts@freebnbnow.com.'
  }
]


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
        <CustomSection className="features">
          <Title level={2}>Features</Title>
          <Row>
            {
              features.length != 0 && features.map((data, key) =>
                <Col span={8} key={key}>
                  <Image
                    preview={false}
                    src={data.img}
                  />
                  <Title level={3}>{data.title}</Title>
                  <Text>{data.desc}</Text>
                </Col>
              )
            }
          </Row>
        </CustomSection>
      </Content>
    </Layout >
  );
}