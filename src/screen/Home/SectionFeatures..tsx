
import { Col, Row, Typography, Image } from "antd"
import { CustomSection } from "@component/DesignSystem/CustomSection";

const { Text, Title } = Typography;
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

export const SectionFeatures = () => {
  return (
    <CustomSection className="features">
      <Title level={2}>Features</Title>
      <Row gutter={{ xs: 8, sm: 16, lg: 24 }}>
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
  )
}