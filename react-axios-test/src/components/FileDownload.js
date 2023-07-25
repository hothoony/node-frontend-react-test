import axios from "axios";

const FileDownload = () => {

    const onClickDownloadFile = () => {
        console.log('onClickHandler');

        const url = 'http://localhost:8080/api/br/public/v1/test/wav';
        const data = {};

        axios.post(url, data)
        .then(response => {

            console.log('response', response);
            console.log('response.status', response.status);
            console.log('response.headers[content-type]', response.headers['content-type']);
            console.log('response.headers[content-length]', response.headers['content-length']);
            console.log('response.headers[content-disposition]', response.headers['content-disposition']);
            console.log('response.data', response.data);
            
            downloadFile(response);
        })
        .catch(error => {
            console.log('error', error);
        });
    }

    const downloadFile = (response) => {

        const blob = new Blob([response.data]);
        console.log('blob', blob);

        const fileObjectUrl = window.URL.createObjectURL(blob);

        const contentType = response.headers['Content-Type'];
        console.log('contentType', contentType);

        const link = document.createElement('a');
        link.href = fileObjectUrl;
        link.style.display = 'none';
        link.download = '다운로드 할 파일명.wav';

        document.body.appendChild(link);
        link.click();
        link.remove();

        window.URL.revokeObjectURL(fileObjectUrl);
    }

    return (
        <div>
            <h2>FileDownload</h2>

            <div>
                <button onClick={onClickDownloadFile}>downloadFile</button>
            </div>

        </div>
    );
};

export default FileDownload;
