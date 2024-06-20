import { CustomButton } from "@component/DesignSystem/CustomButton"
import { CustomCard } from "@component/DesignSystem/CustomCard"
import { Flex, Space, Image, Row, Col } from "antd"
import { FC } from "react"


export const SectionCheckout: FC = () => {
  return (
    <CustomCard
      nobody
      title={
        <Row align="middle" justify="space-between" gutter={8}>
          <Col xl={17} lg={24}>
            <Space size="small">
              <Image preview={false} src="/images/dashboard/survey-gift.png" width={24} />
              Click to earn 25 TH/S now
            </Space>
          </Col>
          <Col xl={7} lg={24}>
            <CustomButton stretch>Earn now</CustomButton>
          </Col>

        </Row>
      }
    />
  )
}