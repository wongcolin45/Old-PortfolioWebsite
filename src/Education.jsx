

import seal from './images/seal.png';

function Education() {

    const courses = ['Fundamentals of Computer Science I',
                             'Fundamentals of Computer Science II',
                             'Objected Oriented Design'];
    const supportingCourses = ['Introduction to Mathematical Reasoning',
                                        'Discrete Structures',
                                        'Foundations of Cybersecurity',
                                        'Foundations of Data Science'];

    function renderCourses(courses) {
        return (
            <>
                {
                    courses.map((name, index) => {
                        return <p key={name + index}>{'- '+name}</p>
                    })
                }
            </>
        )
    }

    return (
        <div className="content-container">
            <div className="education-container" style={{width: "100%"}}>
                <div className="education-description-container">
                    <h1>Education</h1>
                    <h3>GPA: 3.73/4.00 | Major GPA: 4.00/4.00</h3>
                    <h3>Relevant Courses:</h3>
                    {renderCourses(courses)}
                    <h3>Supporting Courses</h3>
                    {renderCourses(supportingCourses)}
                </div>
                <a href={'https://catalog.northeastern.edu/undergraduate/computer-information-science/computer-science/bscs/#programrequirementstext'}
                   target="_blank">
                    <img className='pfp' src={seal}></img>
                </a>

            </div>

        </div>


    )
}

export default Education;