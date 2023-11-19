import icongrab from '../../assets/img/icongrab.png'

export function Footer(){
    return (
        <>
     <footer >
                <p className='ft-text-left'>
                    Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna
            
                </p>
                <img src={icongrab} alt="prb_header" />
                <p className="ft-text-rigth">
                    All rights reserved to
                    Lorem Ipsum© 2022
                </p>
    </footer>
        </>
    )
}