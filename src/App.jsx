import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/page.jsx";
import About from "./pages/about/page.jsx";
import Projects from "./pages/projects/page.jsx";
import Contact from "./pages/contact/page.jsx";



export default function App() {


  return (
    <>
        <BrowserRouter>
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
        </BrowserRouter>
    </>
  )
}


