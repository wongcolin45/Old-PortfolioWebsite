import IntroPage from "./IntroPage.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import EducationPage from "./EducationPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import Resume from "./Resume.jsx";



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
            <Route path="/resume" element={<Resume/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default App
