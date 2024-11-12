import IntroPage from "./IntroPage.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import EducationPage from "./EducationPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";



function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IntroPage/>}/>
            <Route path="/education" element={<EducationPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default App
