import { Col, Row, Image, Flex, Space } from "antd"
import { FC } from "react"
import { CustomCard } from "@component/DesignSystem/CustomCard"
import { SurveyItem } from "@component/DesignSystem/SurveyItem"

const sampleSurvey = [
  {
    key: 1,
    value: '26,000',
    time: 14,
    star: 5
  }, {
    key: 2,
    value: '26,000',
    time: 14,
    star: 5
  }, {
    key: 3,
    value: '26,000',
    time: 14,
    star: 5
  }, {
    key: 4,
    value: '26,000',
    time: 14,
    star: 5
  }, {
    key: 5,
    value: '26,000',
    time: 14,
    star: 5
  }, {
    key: 6,
    value: '26,000',
    time: 14,
    star: 5
  }, {
    key: 7,
    value: '26,000',
    time: 14,
    star: 5
  }, {
    key: 8,
    value: '26,000',
    time: 14,
    star: 5
  },
]

export const SectionSurvey: FC = () => {
  return (
    <CustomCard
      title={
        <Flex align="center">
          <Space size="small">
            <Image preview={false} src="/images/dashboard/survey-gift.png" width={24} />
            Complete the surveys from CPX to earn rewards
          </Space>
        </Flex>
      }
      className="survey"
    >
      <Row gutter={[24, 24]}>
        {
          sampleSurvey.map(({ key, value, time, star }) =>
            <Col xs={12} sm={8} md={6} key={key}>
              <SurveyItem
                value={value}
                time={time}
                star={star}
              />
            </Col>
          )
        }
      </Row>
    </CustomCard>
  )
}