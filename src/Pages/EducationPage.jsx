

import seal from '../images/seal.png';

import {courses} from '../ProjectInfo/projectInfo.js';
import {useState} from 'react';
import NavBar from "../Components/NavBar.jsx";

function EducationPage() {

    const [courseClicked, setCourseClicked] = useState(-1);

    const handleClick = (index) => {
        setCourseClicked(c => {
            return (index === c) ? -1 : index;
        });
    }

    function renderCourse(name, description, index) {
        let style = {};
        const selected = index === courseClicked;
        if (selected) {
            style = {boxShadow: "none", transform: "translate(7px, 7px)"}
        }
        return (
            <>
                <button key={name} onClick={() => handleClick(index)} style={style}>{name}</button>
                {selected && <p key={index}>{description}</p>}
            </>
        )

    }


    function renderCourses(courses) {
        return (
            <div className='courses-container'>
                {
                    Object.entries(courses).map(([key, value], index) => (
                        renderCourse(key, value, index)
                    ))
                }
            </div>
        )
    }

    return (
        <>
            <NavBar/>
            <h1 className="page-header">Educational Background</h1>
            <div className="content-container">
                <div className="education-container" style={{width: "100%"}}>
                    <div className="education-description-container">
                        <h1>Northeastern University</h1>
                        <h3>BS in Computer Science | December 2027</h3>
                        <h4>GPA: 3.80/4.00 | Major GPA: 4.00/4.00</h4>
                        <h3>Relevant Courses:</h3>
                        {renderCourses(courses)}


                    </div>
                    <a href={'https://catalog.northeastern.edu/undergraduate/computer-information-science/computer-science/bscs/#programrequirementstext'}
                       target="_blank">
                        <img className='pfp' src={seal}></img>
                    </a>

                </div>

            </div>
        </>
    )
}

export default EducationPage;