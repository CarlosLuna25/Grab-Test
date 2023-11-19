import Pic1 from '../../assets/img/Pic1.png'
import Pic2 from '../../assets/img/Pic2.png'
import Pic3 from '../../assets/img/Pic3.png'
import Pic4 from '../../assets/img/Pic4.png'
export function FirstCard(){
    return (
        <>
        <div className="firtsCard">
            <div className="textFirst">
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                </p>
            </div>
            <img src={Pic1} alt="pic1" className="imageFirstCard" />
        </div>

        <div className="secondCard">
            <h1 className='secondCardTitle' >Lorem ipsum</h1>
            <p className="secondCardDesc" >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </p>
            <div className="secondCardContent">
                <div className="card">
                    <img src={Pic2} alt="pic2"className="cardImage" />
                    <button className="btnCard">LOREM IPSUM</button>
                </div>
                <div className="card">
                    <img src={Pic3} alt="pic2"className="cardImage" />
                    <button className="btnCard">LOREM IPSUM</button>
                </div>
                <div className="card">
                    <img src={Pic4} alt="pic2"className="cardImage" />
                    <button className="btnCard">LOREM IPSUM</button>
                </div>
            </div>
            <button className="btnSecondCard">LEARN MORE</button>
        </div>
        </>
    )
}