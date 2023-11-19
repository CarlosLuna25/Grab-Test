import { BannerGreen } from "./BannerGreen";
import { CardVideos } from "./CardVideos";
import { CarouselBanner } from "./CarouselBanner";
import { FirstCard } from "./FirstCard";
import { FormCard } from "./FormCard";
import { PhoneBanner } from "./PhoneBanner";

export function MainContainer() {
    return (

        <>
          <main>
        
        <FirstCard/>
        <BannerGreen/>
        <CardVideos />
        <FormCard />
        <PhoneBanner/>
        <CarouselBanner/>
      {/*   
        
       
    
        <div className="sevenCard">
            <h1 style=" font-size: 56px; color: white;">Lorem ipsum</h1>
            <div style="display: flex; gap: 5%;">
                <img src="assets\Pic7.png" alt="pci" style="object-fit:fill; width:300px; height:400px;"/>
                <img src="assets\Pic8.png" alt="pci" style="object-fit:fill; width:300px; height:400px;"/>
                <img src="assets\Pic9.png" alt="pci" style="object-fit:fill; width:300px; height:400px;"/>
            </div>
            <div  style="display: flex; margin-top: 2%; width: 100%; justify-content: center; gap: 2%;">
                <i className="fa-solid fa-circle" style="color: white; "></i> 
                <i className="fa-regular fa-circle" style="color: white;"></i>
                <i className="fa-regular fa-circle" style="color: white; "></i>
            </div>
            <button className="btnStandar" style="color: black; background-color:white; margin-top:5%">VIEW ALL</button>
        </div> */}
    </main>
        </>

    )
}