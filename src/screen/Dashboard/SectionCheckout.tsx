import { CustomButton } from "@component/DesignSystem/CustomButton"
import { CustomCard } from "@component/DesignSystem/CustomCard"
import { Flex, Space, Image } from "antd"
import { FC } from "react"


export const SectionCheckout: FC = () => {
  return (
    <CustomCard
      nobody
      title={
        <Flex align="center">
          <Space size="small">
            <Image src="/images/dashboard/survey-gift.png" width={24} />
            Click to earn 25 TH/S now
          </Space>
        </Flex>
      }
      extra={
        <CustomButton>Earn now</CustomButton>
      }
    />
  )
}