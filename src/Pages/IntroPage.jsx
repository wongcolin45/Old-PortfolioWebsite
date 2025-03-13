
//import pfp from '../images/obito.jpeg';
import pfp from '../images/megumi.jpg';
import NavBar from "../Components/NavBar.jsx";





function IntroPage() {
    return (
        <>
            <NavBar/>
            <h1 className="page-header">About Me</h1>
            <div className="content-container">
                <div className="description-container">

                    <h1>Hi my name is Colin Wong. </h1>
                    <p>
                        Hi, I’m Colin Wong! I’m a second-year Computer Science student at Northeastern University
                        with a strong interest in full-stack and back-end development. I enjoy building robust server-side
                        solutions and understanding how they connect with front-end interfaces to create seamless applications.
                        I’m passionate about exploring new technologies, optimizing performance, and solving real-world problems through coding.
                        I’m always excited to learn and grow as a developer.
                    </p>
                </div>
                <a href={'https://www.instagram.com/colinwong27/'} target="_blank">
                    <img className="pfp" src={pfp} alt="pfp"/>
                </a>
            </div>
            <div className="links">
            </div>
        </>
    )
}

export default IntroPage;