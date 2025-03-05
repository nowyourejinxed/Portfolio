import Section from "./Section.jsx";
import Button from "./Button.jsx";

export default function Hero(){
    return(
        <>
            <Section
                className="pt-[12rem] -mt-[5.25rem]"
                crosses
                customPaddings
                id="hero"
            >
                <div className="container relative">
                    <div
                        className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                        <h1 className="h1 mb-6">
                            Welcome to My
                        </h1>
                        <h1 className="h1 mb-6 inline-block relative">
                                Portfolio
                            </h1>
                        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                            Hey, I'm Sabrina — software engineer, problem solver, and professional coffee enthusiast.
                            I build web apps that make life easier and game worlds that spark imagination — always with a clickity-clackity keyboard by my side.
                        </p>
                        <Button href="/contact">
                            Let's Build Something Awesome!
                        </Button>
                    </div>
                </div>


            </Section>
        </>
    );
}