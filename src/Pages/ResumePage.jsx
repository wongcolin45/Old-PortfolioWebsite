import NavBar from "../Components/NavBar.jsx";
import GoogleDocumentViewer from "../Components/GoogleDocumentViewer.jsx";
import { Document, Page } from 'react-pdf';
import pdfFile from '../../public/resume.pdf';


function ResumePage() {

    function downloadButton() {
        return (
            <div>
                <a
                    href="../../public/resume.pdf"
                    download="ColinWong_Resume.pdf"
                >
                    Download
                </a>
            </div>
        )
    }

    return (
        <>
            <NavBar></NavBar>
            <Document file={pdfFile} className={'resume-pdf'} >
                <Page pageNumber={1} className={'resume-page'} />
            </Document>
            {downloadButton()}

        </>
    )
}

export default ResumePage;