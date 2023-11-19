
import Pic7 from '../../assets/img/Pic7.png';
import Pic8 from '../../assets/img/Pic8.png';
import Pic9 from '../../assets/img/Pic9.png';
import Pic10 from '../../assets/img/Pic10.png';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    dots:true,
    loop:true,
  
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 3,
        }
    },
  };
export function CarouselBanner(){
    return (
        <div className="sevenCard">
            <h1 className="title">Lorem ipsum</h1>
            <OwlCarousel className="slider-items owl-carousel owl-theme" {...options}>
                      <div className="item"><img src={Pic7}/></div>
                      <div className="item"><img src={Pic8}/></div>
                      <div className="item"><img src={Pic9}/></div>
                      <div className="item"><img src={Pic10}/></div>
                      <div className="item"><img src={Pic7}/></div>
                      <div className="item"><img src={Pic8}/></div>
                      <div className="item"><img src={Pic9}/></div>
                      <div className="item"><img src={Pic10}/></div>
                   
                     
                  </OwlCarousel>
       
       
        <button className="btnStandar" >VIEW ALL</button>
    </div>
    )
}