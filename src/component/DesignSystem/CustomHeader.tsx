
import { FC } from "react"
import { Flex, Typography, Image, Menu } from "antd"
import { useLocation } from "react-router-dom"
import { CustomMenu } from "./CustomMenu"

const { Text, Link } = Typography

export const CustomHeader: FC = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <header className="header">
      <div className={`${location.pathname == '/' && 'container'}`}>
        <Flex justify="space-between" align="center">
          <Link href="/" className="logo">
            <Image
              preview={false}
              width={100}
              src="/images/sample-logo.png"
            />
          </Link>
          {location.pathname != '/' && <CustomMenu />}

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