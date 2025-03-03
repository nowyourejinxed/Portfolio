import Navbar from "../components/navbar.jsx";
import '../css/home.css';


export default function Home(){

    return(
        <>
            <Navbar/>
            <div className="hero">
                <div className="hero-text">
                    <h1>
                        Welcome to My Portfolio
                    </h1>
                    <p>
                        I'm a passionate Software Engineer with a focus on building amazing applications.
                    </p>
                </div>
                <div className="rope-light">
                    <div className="snake" style={{animationDelay: '0s'}}></div>
                    <div className="snake" style={{animationDelay: '2s'}}></div>
                    <div className="snake" style={{animationDelay: '4s'}}></div>
                </div>

            </div>
        </>
    );
}