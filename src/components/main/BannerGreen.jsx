import Pic5 from '../../assets/img/Pic5.png'
export function BannerGreen(){
    return (
        <>
        <div className="threeCard">
            <div className="threeCardContent">
                <p className="textCardThree">
                    Lorem ipsum
                    dolor sit
                    amet,
                    consetetur
                </p>
                <button className="btnThreeCard">LOREM IPSUM DOLOR SIT</button>
                <button className="btnThreeCard2">LOREM IPSUM DOLOR SIT AMET</button>
            </div>
            <img src={Pic5} alt="pic5" className="threeCardImage"/>
        </div>
        </>

    )
}