import { Header } from "./ui/header"
import { MainNav } from "./nav/MainNav"
import { Footer } from "./ui/Footer"
import { MainContainer } from "./main/MainContainer"
export function App() {
    return(
        <>
         <Header />
            <MainNav />
                <MainContainer/>
         <Footer/>
    
        </>
       
    )
}