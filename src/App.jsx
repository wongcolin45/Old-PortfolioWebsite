import IntroPage from "./Pages/IntroPage.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import EducationPage from "./Pages/EducationPage.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";
import ResumePage from "./Pages/ResumePage.jsx";



function App() {


  return (
    <BrowserRouter
        future={{
            v7_relativeSplatPath: true,
        }}>
        <Routes>
            <Route path="/" element={<IntroPage/>}/>
            <Route path="/education" element={<EducationPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/resume" element={<ResumePage/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default App
