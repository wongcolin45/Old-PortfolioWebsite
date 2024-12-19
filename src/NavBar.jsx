import {Link} from "react-router-dom";



function NavBar() {


    return (
        <>
            <div className="Header">
                <Link to="/">
                    <button>About Me</button>
                </Link>
                <Link to="/education">
                    <button>Education</button>
                </Link>
                <Link to="/projects">
                    <button>Projects</button>
                </Link>
                <Link to="/resume">
                    <button>Resume</button>
                </Link>
            </div>
            <br></br>
            <hr></hr>
        </>

    )
}

export default NavBar;