
import { Col, Row, Image } from "antd"
import { FC } from "react"
import { CustomSection } from "@component/DesignSystem/CustomSection"
import { SigninForm } from "./SigninForm"

export const SectionTop: FC = () => {
  return (
    <CustomSection>
      <Row align="middle" justify="center" gutter={{ xs: 8, sm: 16, lg: 24 }}>
        <Col md={9} xs={12}>
          <Image
            preview={false}
            width={'100%'}
            src="/images/coin.png"
          />
        </Col>
        <Col md={13} offset={2} xs={24}>
          <SigninForm />
        </Col>
      </Row>
    </CustomSection>
  )
}