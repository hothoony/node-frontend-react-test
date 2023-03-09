import { Layout, Space } from "antd";
const { Header, Footer, Content, Sider } = Layout;

const LayoutTest01 = () => {
    return (
        <div>
            <h3>LayoutTest01</h3>

            <Space>
                <Layout>
                    <Header></Header>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
            </Space>

        </div>
    );
}

export default LayoutTest01;
