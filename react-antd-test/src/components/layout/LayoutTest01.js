import { Layout, Space } from "antd";
const { Header, Footer, Content, Sider } = Layout;

const LayoutTest01 = () => {

    const headerStyle = {
        backgroundColor: '#7dbcea',
        color: 'black',
    }

    const siderStyle = {
        backgroundColor: '#0f8ee9',
        color: 'black',
    }

    const contentStyle = {
        backgroundColor: '#3ba0e9',
        color: 'black',
        height: '100px',
    }

    const footerStyle = {
        backgroundColor: '#7dbcea',
        color: 'black',
    }

    return (
        <div style={{width: '90%'}}>
            <h3>LayoutTest01</h3>

            <Space direction="vertical" style={{width: '100%'}} size={[0, 50]}>

                <Layout>
                    <h3 style={{color: 'black'}}>Layout #1</h3>
                    <Header style={headerStyle}>Header</Header>
                    <Content style={contentStyle}>Content</Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>

                <Layout>
                    <h3 style={{color: 'black'}}>Layout #2</h3>
                    <Header style={headerStyle}>Header</Header>
                    <Layout>
                        <Sider style={siderStyle}>Sider</Sider>
                        <Content style={contentStyle}>Content</Content>
                    </Layout>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>

                <Layout>
                    <h3 style={{color: 'black'}}>Layout #3</h3>
                    <Header style={headerStyle}>Header</Header>
                    <Layout>
                        <Content style={contentStyle}>Content</Content>
                        <Sider style={siderStyle}>Sider</Sider>
                    </Layout>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>

                <Layout>
                    <h3 style={{color: 'black'}}>Layout #4</h3>
                    <Sider style={siderStyle}>Sider</Sider>
                    <Layout>
                        <Header style={headerStyle}>Header</Header>
                        <Content style={contentStyle}>Content</Content>
                        <Footer style={footerStyle}>Footer</Footer>
                    </Layout>
                </Layout>

            </Space>

        </div>
    );
}

export default LayoutTest01;
