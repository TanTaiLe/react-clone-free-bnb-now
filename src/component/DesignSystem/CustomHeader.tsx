
import { FC, useContext } from "react"
import { Flex, Typography, Image, Space } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import { CustomMenu } from "./CustomMenu"
import { CustomButton } from "./CustomButton"
import { NotiContext } from "../../App"

const { Text, Link } = Typography

export const CustomHeader: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setNoti } = useContext(NotiContext);

  const logout = () => {
    setNoti({ type: 'success', message: 'Log out successfully!' })
    navigate('/')
  }

  return (
    <header className={`header ${location.pathname == '/' && 'header--home'}`}>
      <div className={`${location.pathname == '/' ? 'container' : 'container-fluid'}`}>
        <Flex justify="space-between" align="center">
          <Link href="/" className="logo">
            <Image
              preview={false}
              width={100}
              src="/images/sample-logo.png"
            />
          </Link>
          {location.pathname != '/' && <CustomMenu />}

          <Space size="large" align="center" style={{ width: 'auto' }}>
            <Text className="header-contact">
              Contact:
              <Link href="mailto:contacts@freebnbnow.com">
                contacts@freebnbnow.com
              </Link>
            </Text>
            {location.pathname != '/' && <CustomButton onClick={logout} type={4}>Log out</CustomButton>}
          </Space>
        </Flex>
      </div>
    </header>
  )
}