import "./patientScreen.css";
import MenuIcon from '@mui/icons-material/Menu';

const PatientScreen = () => {
  return (
    <div className='patientScreen'>
        {/*Nav bar start*/}
        <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">Srilankan health care</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="menuIcon"><MenuIcon style={{color:"#fff"}}/></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">History</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Next-Clinic</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Consultant</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pre-Booking</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Setting</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#">Change password</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        {/*Nav bar end*/}
        {/*Body section start*/}
        <div className="bodySection">
            <div className="leftSide">
                <div className="profilePic"><img src="./assets/profile.jpeg" className="profileimg"/></div>
                <hr/>
                <div className="personalDetails">
                    <div>ID : JA/20010 </div>
                    <div>Name : Example</div>
                    <div>NIC : 987712345V</div>
                    <div>Address : Jaffna, Chavakachcheri.</div>
                    <div>Phone Number : 077 1234567</div>
                </div>
            </div>
            <div className="middle">
                <div className="history">History</div>
            </div>
            <div className="rightSide">
                <div className="box">hccdhidhciuchzujxhcujxzhujx</div>
                <div className="box">hccdhidhciuchzujxhcujxzhujx</div>
                <div className="box">hccdhidhciuchzujxhcujxzhujx</div>
                <div className="box">hccdhidhciuchzujxhcujxzhujx</div>
            </div>
        </div>
        {/*Body section end*/}
    </div>
  )
}

export default PatientScreen
