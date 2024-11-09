import Project from "./Project.jsx";
import {planner, reactTacToe} from "./ProjectInfo/projectInfo.js";



function ProjectsSection() {



    return (
        <>
            <Project info={reactTacToe}/>
            <br></br>
            <br></br>
            <Project info={planner}/>
        </>
    )

}

export default ProjectsSection;