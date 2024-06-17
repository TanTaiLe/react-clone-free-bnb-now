import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { trans } from "@language/index.ts";
import { SectionTop } from "./SectionTop";
import { SectionFeatures } from "./SectionFeatures.";
import { CustomHeader } from "@component/DesignSystem/CustomHeader";
import { SectionTransactions } from "./SectionTransactions";

const { Content } = Layout;


export const Home = () => {
  const navigate = useNavigate();
  return (
    // <div>
    //   <h1>Home</h1>
    //   <Button type={"primary"} onClick={() => navigate('/dashboard')}>{trans('button.go_to_dashboard')}</Button>
    // </div>
    <Layout>
      <CustomHeader />
      <Content>
        <SectionTop />
        <SectionFeatures />
        <SectionTransactions />
      </Content>
    </Layout >
  );
}