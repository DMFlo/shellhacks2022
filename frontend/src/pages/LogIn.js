import logo from '../images/logo_white.png';
import 'antd/dist/antd.min.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/CardContent';
import CardContent from '@mui/material/CardContent';

const cardStyle = {
    backgroundColor: "#042c60",
    display: "flex",
    felxDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    height: "700px",
    width: "700px"
};
const logoStyle = {
    width: "300px",
    height: "120px", 
    margin: "auto"
};
const buttonStyle = {
    color: "white", 
    display: "flex", 
    margin: "auto",
    padding: "5%",
    width: "70%"
};

const Login = () => {
    return (
        <div style={{width: "100%", height: "100vh", display: "grid", placeItems: "center"}}>
            <Card style={cardStyle} variant='outlined'>
                <CardContent style={{ width: "100%", height: "100%", display:"grid"}}>
                <img src={logo} alt='logo' style={logoStyle}/>
                <div>
                    <Button type="primary" variant="contained" size="large" style={buttonStyle} block>Log-In</Button> 
                </div>
                <div>
                    <Button type="primary" variant="contained" size="large" style={buttonStyle} block>Registration</Button> 
                </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;