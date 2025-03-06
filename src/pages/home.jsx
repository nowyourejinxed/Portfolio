import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";


export default function Home(){

    return(
        <>
            <div className={"pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"}>
                <NavBar/>
                <Hero/>
                {/*add expertise/skills section*/}
                {/*add easter egg mini game?*/}
                <Footer/>
            </div>
        </>
    );
}