
import { FC } from "react"
import { Flex, Typography, Image } from "antd"

const { Text, Link } = Typography

export const CustomHeader: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Flex justify="space-between" align="center">
          <Link href="/">
            <Image
              preview={false}
              width={100}
              src="/sample-logo.png"
            />
          </Link>

          <Text className="header-contact">
            Contact:
            <Link href="mailto:contacts@freebnbnow.com">
              contacts@freebnbnow.com
            </Link>
          </Text>
        </Flex>
      </div>
    </header>
  )
}