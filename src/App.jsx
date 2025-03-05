
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import ButtonGradient from "./assets/ButtonGradient.jsx";




export default function App() {


  return (
    <>
        <Routes>
            <Route
                exact
                path="/"
                element={<Home />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/projects"
                element={<Projects />}
            />

            <Route
                path="/contact"
                element={<Contact />}
            />

            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
        <ButtonGradient />
    </>
  )
}


