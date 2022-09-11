import logo from '../images/logo_white.png';
import background from '../images/background.png';
import 'antd/dist/antd.min.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/CardContent';
import CardContent from '@mui/material/CardContent';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider, db, app } from "../firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom"; 
import Home from "./Home";

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

// use this instead of AuthStateListener, which I couldn't get to detect auth changes.
function signInWithGoogle() {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log("auth state changed in LogIn")
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)

        // if not in database already, make entry
        // this was deleting all our data upon re-login
        // setDoc(doc(db, "users", user.uid, { merge: true }), {
        //     // create an empty doc for new users
        // }).then(
        //     (response) => {
        //     console.log(response)
        //     // redirect after login
        //     window.location.href = 'http://localhost:3000/Home'; // todo comment out for prod
        //     // window.location.href = 'https://ucf-shellhacks.web.app/Home'; //todo uncomment for prod, improve security (by enforcing auth for /Home?)
        //     }
        // ).catch(
        //     (error) => console.log(error)
        // );

        // redirect after login
            window.location.href = 'http://localhost:3000/Home'; // todo comment out for prod
            // window.location.href = 'https://ucf-shellhacks.web.app/Home'; //todo uncomment for prod, improve security (by enforcing auth for /Home?)

    }).catch(
        (error) => {
    console.log(error);
    });
}

const Login = () => {
    return (
        <div style={{width: "100%", height: "100vh", display: "grid", placeItems: "center", backgroundImage:"linear-gradient(120deg,#004977, #d03027)"}}>
            <Card style={cardStyle}>
                <CardContent style={{ width: "100%", height: "100%", display:"grid"}}>
                <img src={logo} alt='logo' style={logoStyle}/>
                <div>
                    <Button onClick={signInWithGoogle} type="primary" variant="outlined" size="medium" style={buttonStyle} block>Sign In</Button> 
                </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;