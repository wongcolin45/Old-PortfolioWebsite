
const GoogleDocumentViewer = () => {
    //const documentURL = 'https://docs.google.com/document/d/DOCUMENT_ID/edit?usp=sharing';
    const documentURL = 'https://docs.google.com/document/d/1R8N4uCaZWPQ6mRFiE0n47AEcgDuWC6WF/preview';
    return (
        <div>
            <iframe src={documentURL} width="100%" height="700vh" className={'resume-form'} />
        </div>
    )
};
export default GoogleDocumentViewer;