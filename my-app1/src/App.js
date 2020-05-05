import React from "react";
import google from "./g2.png";
import facebook from "./f2.png";
import twitter from "./t2.png";
import user from "./user.png";
import pass from "./pass.png";

import "./App.css";

function App() {
    return (
        <div className = "container">
            <div className = "box">
                <h2> Login </h2>
                <p>Don 't have an account?<a className = "link" href = "#"> create your account </a>, it takes less than a minute. </p><br></br>
                <input type = "text" className = "username" placeholder="User Name"></input>
                <img src={user} className="img1"></img><br></br><br></br>
                <input type = "text" className = "password" placeholder="Password"></input>
                <img src={pass} className="img1"></img>
                <br></br><br></br><br></br>

                <div className="sub-div">
                    <div><input type="checkbox" className="checkbox"></input>
                        <label className="remember_me">Remember Me</label>
                    </div>
                    <div>
                        <label className="forgot_password">Forgot Password?</label>
                    </div>
                </div><br></br>

                <button type = "button" className = "button"> Log in </button><br></br>
                <br></br>
                <div className="last_container">
                    <div className="or_login">Or log in with</div>
                    <div className="logos">
                    <img src={facebook} className="img"></img>
                    <img src={twitter} className="img"></img>
                    <img src={google} className="img"></img>
                    </div>
                </div>
            </div>
            <div className = "box1">

                    <h2> Welcome </h2>
                    <p> Sed do euisedmoud tempour et doloure magna aliqua.your perfect place to buy and sell! </p>

            </div>
        </div>
    );
}
export default App;
