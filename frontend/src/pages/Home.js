import logo from '../images/logo_white.png';
import Manage from './Manage';
import 'antd/dist/antd.min.css';
import {Layout, Menu } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;
const style = {
    float: "left",
    width: "120px",
    height: "40px",
    margin: "16px 24px 16px 0"
};

const Home = () => {
    return (
        <Layout>
            <Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
            }}
            >
                <img src={logo} alt='logo' style={style}/>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <Manage/>
                </div>
            </Content>
            
            <Footer
            style={{
                textAlign: 'center',
            }}
            >
            Capital One Name by Group 
            </Footer>
        </Layout>
    );
}

export default Home;