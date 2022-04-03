import "./login.css"
import MenuIcon from '@mui/icons-material/Menu';

export default function Login() {
  return (
    <div className="mainSection">
        {/*Top bar*/}
        <div className="topBar">
            <div className="leftside">Logo</div>
            <div className="rightside">
                <ul className="menu">
                    <li>Home</li>
                    <li>Clinic</li>
                    <li>Consultant</li>
                    <li>Pre-Booking</li>
                </ul>
                <button className="signup">Signup</button>
            </div>
                <span className="menuIcon"><MenuIcon/></span>
        </div>
        {/*Top bar end*/}

        {/*Body part start*/}
        <div className="bodySection">
            <div className="bleftside">
                <div className="generalText">General</div>
                <div className="text1">“The human body has been designed to resist an infinite number of changes and 
                                        attacks brought about by its environment. The secret of good health lies in 
                                        successful adjustment to changing stresses on the body.”</div>
                <div className="mobileApp">
                    <img className="playstore" src="/assets/playstore.png" />
                </div>
            </div>
            <div className="brightSide">
                <div className="container">
                    <input className="username" type="text" placeholder="Username" /><br/>
                    <input className="password" type="text" placeholder="Password" /><br/>
                    <button className="blogin">Login</button><br/>
                    <div className="forgetPassword">Forgetten Password?</div>
                    <hr className="horizontalLine"/>
                    <button className="bsignup">Signup</button>
                </div>
            </div>
        </div>
    </div>
  )
}