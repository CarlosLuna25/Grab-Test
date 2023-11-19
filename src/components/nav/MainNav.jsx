import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Prb_Header from '../../assets/img/Prb_Header.png'
import icongrab from '../../assets/img/icongrab.png'
import Timer from './TimerComponent'
export function MainNav(){
    const startTime = new Date();
  const endTime = new Date('Dec 31, 2023 00:00:00'); // 30 minutos
return(
    <>
     {/* aside social menu */}
        <div className="menuLateral">

            <FontAwesomeIcon icon={faFacebook} className='socialIcon' />
            <FontAwesomeIcon icon={faTwitter} className='socialIcon' />
            <FontAwesomeIcon icon={faInstagram}className='socialIcon'  />
            <FontAwesomeIcon icon={faYoutube} className='socialIcon'  />
            <FontAwesomeIcon icon={faTiktok} className='socialIcon' />
          
        </div>

        <nav>
            <img src={Prb_Header} alt="prb_header" className="Navbackground" />
            <div className="contentNav">
                <div className="headerNav">
                    <img src={icongrab} alt="grab" className="iconHeadernNav"/>
                    <div className="contentNavBody">
                        <div className="routeNav">
                        <a href="" className="route">LOREM IPSUM</a>
                        <a href="" className="route">LOREM IPSUM</a>
                        <a href="" className="route">LOREM IPSUM</a>
                        <a href="" className="route">LOREM IPSUM</a>
                        <a href="" className="route">LOREM IPSUM</a>
                        <a href="" className="route">LOREM IPSUM</a>
                    </div>
                        <div className="bodyNav">
                            <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                            <h1 className="bodyNavTitle2">LOREM IPSUM DOLOR &nbsp;</h1>
                            <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                            <button className="bodyNavButton">WHAT IS NEXT</button>
                        </div>
                    </div>
                </div>
            
              <Timer startTime={startTime} endTime={endTime} />
            </div>

        </nav>
    </>
)

}