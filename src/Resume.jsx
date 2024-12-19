import NavBar from "./NavBar.jsx";
import GoogleDocumentViewer from "./GoogleDocumentViewer.jsx";

function Resume() {

    function downloadButton() {
        return (
                <a
                    href="/ProjectInfo/resume.pdf"
                    download="ColinWong_Resume.pdf"
                >
                    Download
                </a>
        )
    }

    return (
        <>
            <NavBar></NavBar>
            <h1>Resume</h1>

            <GoogleDocumentViewer></GoogleDocumentViewer>
            {downloadButton()}

        </>
    )
}

export default Resume;