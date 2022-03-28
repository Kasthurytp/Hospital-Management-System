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
            <div className="welcomeText">Health is your prioroty</div>
            <button className="login">Login into your account</button>
        </span>
      </div>
    </div>
  )
}
