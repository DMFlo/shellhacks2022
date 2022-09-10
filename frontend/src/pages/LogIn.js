import logo from '../images/logo_white.png';
import background from '../images/background.png';
import 'antd/dist/antd.min.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/CardContent';
import CardContent from '@mui/material/CardContent';

const cardStyle = {
    backgroundColor: "transparent",
    display: "flex",
    felxDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "600px",
    width: "600px"
};
const logoStyle = {
    width: "430px",
    height: "170px", 
    margin: "auto"
};
const buttonStyle = {
    color: "white", 
    display: "flex",
    fontSize: "25px",
    marginTop: "10%",
    margin: "auto",
    padding: "4%",
    width: "60%",
    borderColor: "white"
};

const Login = () => {
    return (
        <div style={{width: "100%", height: "100vh", display: "grid", placeItems: "center", backgroundImage:"linear-gradient(120deg,#004977, #d03027)"}}>
            <Card style={cardStyle}>
                <CardContent style={{ width: "100%", height: "100%", display:"grid"}}>
                <img src={logo} alt='logo' style={logoStyle}/>
                <div>
                    <Button type="primary" variant="outlined" size="medium" style={buttonStyle} block>Sign In</Button> 
                </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;