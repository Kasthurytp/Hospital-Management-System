import Topbar from "../../components/topbar/topbar";
import MenuIcon from '@mui/icons-material/Menu';
import "./home.css"

export default function Home() {     
  return (
    <div>
      <Topbar/>

      {/*Body part*/}
      <div className="mainSection">
        <span className="leftContent">
            <div className="general">General</div>
            <div className="welcomeText"><p>“Values are related to our emotions, 
                                          just as we practice physical hygiene to preserve our physical health, 
                                          we need to observe emotional hygiene to preserve a healthy mind and attitudes.”</p></div>
            <button className="login">Login into your account</button>
        </span>
      </div>
    </div>
  )
}
