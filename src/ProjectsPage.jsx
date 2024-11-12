import Project from "./Project.jsx";
import {planner, reactTacToe} from "./ProjectInfo/projectInfo.js";
import NavBar from "./NavBar.jsx";



function ProjectsPage() {



    return (
        <>
            <NavBar/>
            <h1 className="page-header">What I have Built...</h1>
            <Project info={reactTacToe}/>
            <br></br>
            <br></br>
            <Project info={planner}/>
        </>
    )

}

export default ProjectsPage;