
import Github from "./Github.jsx";
import PropTypes from "prop-types";
import {useState} from "react";

function Project(props) {


    const [imageClicked, setImageClicked] = useState(false);

    function handleClick() {
        setImageClicked(prev => !prev);
    }


    function renderContents() {
        if (imageClicked) {
            return (
                <button onClick={handleClick}>
                    <img src={props.info.image} style={{maxWidth: "150vh"}}></img>
                </button>
            )
        }
        return (
            <>
            <div className="project-description-container">
                <h1>{props.info.name}</h1>
                <p>{props.info.description}</p>
                <span>{`Technologies used: ${props.info.technologies}`}</span>
                <br/>
                <Github link={props.info.github}/>
            </div>

            <button onClick={handleClick}>
                <img src={props.info.image}></img>
            </button>
            </>
        )
    }

    return (
        <div className="project-container">
            {renderContents()}
        </div>
    )
}

export default Project;

Project.propTypes = {
    info: PropTypes.object.isRequired,
}