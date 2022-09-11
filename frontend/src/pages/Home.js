import logo from '../images/logo_white.png';
import Manage from './Manage';
import 'antd/dist/antd.min.css';
import {Button, Layout} from 'antd';
import React from 'react';
import { getAuth, signOut } from "firebase/auth";

const { Header, Content, Footer } = Layout;
const style = {
    float: "left",
    width: "190px",
    height: "70px",
    margin: "16px 24px 16px 0"
};
const buttonStyle = { 
    color: "white",
    fontWeight: "bold", 
    marginTop: "1.5%",
    marginLeft: "79%",
    fontSize: "20px",
    position: "fixed"
};


function signOutWithGoogle() {
    const auth = getAuth();
    console.log(auth)
    signOut(auth).then(() => {
        console.log("Sign-out successful.")
        console.log(auth)
        // redirect after sign-out
        window.location.href = 'http://localhost:3000/'; // todo comment out for prod
        // window.location.href = 'https://ucf-shellhacks.web.app/'; //todo uncomment for prod, improve security (by enforcing auth for /Home?
    }).catch((error) => {
        console.log("Error during sign-out.")
    });
}

const Home = () => {
    return (
        <Layout>
            <Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                height: '100px'
            }}
            >
                <img src={logo} alt='logo' style={style}/>
                <Button onClick={signOutWithGoogle} type="text" style={buttonStyle}>Log Out</Button>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64}}>
                <div className="site-layout-background" style={{ padding: 24, height:"100vh" }}>
                    <Manage/>
                </div>
            </Content>
            
            <Footer
            style={{
                textAlign: 'center',
            }}
            >
                Streaming Subscription Management - ShellHacks 2022
            </Footer>
        </Layout>
    );
}

export default Home;