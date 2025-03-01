import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about/about.jsx";
import Projects from "./pages/projects/projects.jsx";
import Contact from "./pages/contact/contact.jsx";



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


