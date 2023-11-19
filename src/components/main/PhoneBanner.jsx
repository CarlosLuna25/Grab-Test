import Pic6 from '../../assets/img/Pic6.png'

export function PhoneBanner(){

    return ( 
        <div className="sixCard">
        <img src={Pic6} alt="backgroun" className='imgBackground' />
        <div className='info'>
                <h1 >Lorem ipsum</h1>
            <p >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.
            </p>
            <button className="btnStandar" >VIEW ALL</button>
        </div>
    </div>
    )
}