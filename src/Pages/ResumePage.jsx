import NavBar from "../Components/NavBar.jsx";
import GoogleDocumentViewer from "../Components/GoogleDocumentViewer.jsx";

function ResumePage() {

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

export default ResumePage;