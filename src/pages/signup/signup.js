import "./signup.css"
import MenuIcon from '@mui/icons-material/Menu';

export default function Login() {
  return (
    <div className="mainSection">
        
        {/*Nav bar start*/}
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">Srilankan health care</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="menuIcon"><MenuIcon style={{color:"#fff"}}/></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Clinic</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Consultant</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pre-Booking</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        {/*Nav bar end*/}

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
                    <input className="nic" type="text" placeholder="NIC" /><br/>
                    <input className="username" type="text" placeholder="Username" /><br/>
                    <input className="phoneNumber" type="text" placeholder="Phone number" /><br/>
                    <input className="email" type="text" placeholder="Email" /><br/>
                    <input className="password" type="text" placeholder="Password" /><br/>
                    <button className="bsignup">Sign up</button><br/>
                    <div className="forgetPassword">Have an account?</div>
                    <hr className="horizontalLine"/>
                    <button className="blogin">Log in</button>
                </div>
            </div>
        </div>
    </div>
  )
}