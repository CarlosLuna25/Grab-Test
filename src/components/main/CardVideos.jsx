import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pic1 from '../../assets/img/Pic1.png'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
export function CardVideos(){
    return (
        <div className="fourCard">
            <h1>Latest videos</h1>
            <div className="fourCardContent">
                <div className="fourCardFile">
                    <FontAwesomeIcon icon={faCirclePlay} className='playicon' />
                  
                    <img src={Pic1} alt="file"/>
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className="fourCardFile">
                    <FontAwesomeIcon icon={faCirclePlay} className='playicon' />
                  
                    <img src={Pic1} alt="file"/>
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className="fourCardFile">
                    <FontAwesomeIcon icon={faCirclePlay} className='playicon' />
                  
                    <img src={Pic1} alt="file"/>
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className="fourCardFile">
                    <FontAwesomeIcon icon={faCirclePlay} className='playicon' />
                  
                    <img src={Pic1} alt="file"/>
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className="fourCardFile">
                    <FontAwesomeIcon icon={faCirclePlay} className='playicon' />
                  
                    <img src={Pic1} alt="file"/>
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className="fourCardFile">
                    <FontAwesomeIcon icon={faCirclePlay} className='playicon' />
                  
                    <img src={Pic1} alt="file"/>
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
        
            </div>
            <button className="btnFourCard">VIEW ALL</button>
        </div>
    )
}