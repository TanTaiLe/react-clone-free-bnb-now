import { CustomCard } from "@component/DesignSystem/CustomCard"
import { FC } from "react"
import { Flex, Typography, Image, Tag } from "antd"
import { CustomButton } from "@component/DesignSystem/CustomButton"

const { Text } = Typography

export const SectionReferralProgram: FC = () => {

  return (
    <CustomCard className="referral-program" title="Referral program">
      <Text>Your referral link</Text>
      <Flex align="center" justify="space-between">
        <Text italic>https://freebnbnow.com/ref/193822853358</Text>
        <CustomButton iconOnly>
          <Image preview={false} src="/images/dashboard/copy.png" width={20} />
        </CustomButton>
      </Flex>

      <Flex align="center">
        <Text style={{ marginTop: 8 }} strong>Referred users</Text>
        <Tag color="#E2F5FF" style={{ color: '#2578A6', marginLeft: 8, marginTop: 8 }}>0</Tag>
      </Flex>
    </CustomCard>
  )
}