import { CustomButton } from "@component/DesignSystem/CustomButton"
import { CustomCard } from "@component/DesignSystem/CustomCard"
import { Flex, Typography, Image, Space } from "antd"
import { FC } from "react"

const { Text } = Typography

export const SectionReferralLink: FC = () => {
  return (
    <CustomCard title="Your referral link">
      <Space size="small" direction="vertical">
        <Text>Earn 7% of the BNB used to buy miner from anyone who uses Your referral link</Text>
        <Space size="small">
          <Text italic>https://freebnbnow.com/ref/193822853358</Text>
          <CustomButton iconOnly>
            <Image preview={false} src="/images/dashboard/copy.png" width={20} />
          </CustomButton>
        </Space>
      </Space>
    </CustomCard>
  )
}