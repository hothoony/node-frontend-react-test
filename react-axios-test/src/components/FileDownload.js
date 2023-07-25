import axios from "axios";

const FileDownload = () => {

    const onClickDownloadFile = () => {
        console.log('onClickHandler');

        const url = 'http://localhost:8080/api/br/public/v1/test/wav';
        const data = {};

        axios.post(url, data)
        .then(res => {
            console.log('res', res);
            console.log('res.status', res.status);
            console.log('res.data', res.data);
            
            downloadFile(res);
        })
        .catch(err => {
            console.log('err', err);
        })
    }

    const downloadFile = (response) => {
        const blob = new Blob([response.data]);
        console.log('blob', blob);

        const fileObjectUrl = window.URL.createObjectURL(blob);

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
