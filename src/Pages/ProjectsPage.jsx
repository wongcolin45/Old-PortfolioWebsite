import Project from "../Components/Project.jsx";
import {planner, reactTacToe, chess, oasis} from "../ProjectInfo/projectInfo.js";
import NavBar from "../Components/NavBar.jsx";



function ProjectsPage() {



    return (
        <>
            <NavBar/>
            <h1 className="page-header">What I have built...</h1>
            <Project info={reactTacToe}/>
            <br></br>
            <br></br>
            <Project info={planner}/>
            <br></br>
            <br></br>
            <Project info={chess}/>
            <br></br>
            <br></br>
            <Project info={oasis}/>
            <br></br>

        </>
    )

}

export default ProjectsPage;