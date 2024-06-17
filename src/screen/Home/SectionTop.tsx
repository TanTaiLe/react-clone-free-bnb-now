
import { Col, Row, Image } from "antd"
import { FC } from "react"
import { CustomSection } from "@component/DesignSystem/CustomSection"
import { SigninForm } from "./SigninForm"

export const SectionTop: FC = () => {
  return (
    <CustomSection>
      <Row align="middle" gutter={{ xs: 8, sm: 16, lg: 24 }}>
        <Col span={9}>
          <Image
            preview={false}
            width={'100%'}
            src="/images/coin.png"
          />
        </Col>
        <Col span={13} offset={2}>
          <SigninForm />
        </Col>
      </Row>
    </CustomSection>
  )
}