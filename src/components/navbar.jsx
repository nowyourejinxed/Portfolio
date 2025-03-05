import {navigation} from "../constants/index.jsx";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import MenuSvg from "../assets/MenuSVG.jsx";
import Button from "./Button.jsx";
import {disablePageScroll, enablePageScroll} from "scroll-lock/dist/scroll-lock.js";

export default function Navbar(){
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
                openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>

            <div className={"flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"}>
                <a className={"block w-[50rem] xl:mr-8"} href={"/"}>
                    <img src={"../sabrina-jackson.svg"} width={290} height={40} alt={"Logo"}/>
                </a>
                <nav className={`${
                    openNavigation ? "flex" : "hidden"
                } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>

                    <div className={"relative z-2 flex flex-col items-center justify-end m-auto lg:flex-row"}>
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-1 ${
                                    item.onlyMobile ? "lg:hidden" : ""
                                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname.pathname
                                        ? "z-2 lg:text-n-4"
                                        : "lg:text-n-2/60"
                                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <MobileMenu />
                </nav>
                <Button
                    className="ml-auto mt-9 lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>

    );
}

export function MobileMenu(){
    return(

        <div className="absolute inset-0 pointer-events-none lg:hidden">
            <div className="absolute inset-0 opacity-[.15]">
                <img
                    className="w-full h-full object-cover"
                    src={"menu-bg.png"}
                    width={688}
                    height={953}
                    alt="Background"
                />
            </div>
        </div>
    );
}
