import Navbar from "../components/navbar.jsx";
import Hero from "../components/Hero.jsx";


export default function Home(){

    return(
        <>
            <div className={"pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"}>
                <Navbar/>
                <Hero/>
            </div>
        </>
    );
}