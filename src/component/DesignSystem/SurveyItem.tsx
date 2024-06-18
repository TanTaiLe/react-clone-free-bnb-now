import { FC } from "react"
import { Card, Flex, Rate, Typography, Image } from "antd"

const { Title, Text } = Typography

interface Props {

  value?: String,
  time?: any,
  star?: any
}

export const SurveyItem: FC<Props> = ({ value, time, star }) => {

  return (
    <Card className="survey-card">
      <Flex vertical className="survey-item">
        <div>
          <Title level={3} className="title">
            {value}
          </Title>
          <Text className="sub-title">TH/Daily</Text>
        </div>
        <Flex align="center" justify="center" className="time">
          <Image preview={false} className="time-icon" src="/images/dashboard/survey-time.png" />
          <Text className="time-text"> {time} tối thiểu</Text>
        </Flex>
        <Rate defaultValue={star} disabled />
      </Flex>
    </Card>
  )
}