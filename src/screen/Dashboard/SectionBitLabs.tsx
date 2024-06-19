import { CustomButton } from "@component/DesignSystem/CustomButton"
import { CustomCard } from "@component/DesignSystem/CustomCard"
import { FC } from "react"
import { Typography } from "antd"

const { Text } = Typography

export const SectionBitLabs: FC = () => {
  return (
    <CustomCard
      title="BitLabs"
      extra={<CustomButton type={3} size="sm">Offers Walls</CustomButton>}
    >
      <Text type="warning">If you don't see any offer bellow, please click Offers Wall button above.
        Surveys can take up to 1 hour and Offers can take up to 48 hours for us to receive rewards from Bit Labs.</Text>
    </CustomCard>
  )
}