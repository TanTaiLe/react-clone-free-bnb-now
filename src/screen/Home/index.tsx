import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { trans } from "@language/index.ts";
import { SectionTop } from "./SectionTop";
import { SectionFeatures } from "./SectionFeatures.";
import { CustomHeader } from "@component/DesignSystem/CustomHeader";
import { SectionTransactions } from "./SectionTransactions";
import { CustomNoti } from "@component/DesignSystem/CustomNoti";
import { useContext } from "react";
import { NotiContext } from "../../App";

const { Content } = Layout;


export const Home = () => {
  const { noti } = useContext(NotiContext);

  return (
    <Layout >
      <CustomHeader />
      <Content className="ant-layout-content--home">
        <SectionTop />
        <SectionFeatures />
        <SectionTransactions />
      </Content>
      {noti && <CustomNoti type={noti.type} message={noti.message} />}

    </Layout >
  );
}