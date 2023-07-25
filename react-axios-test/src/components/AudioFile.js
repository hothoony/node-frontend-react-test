import axios from "axios";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

const AudioFile = () => {

    const [audio, setAudio] = useState(new Audio());
    const [source, setSource] = useState();
    const [play, setPlay] = useState(false);

    useEffect(() => {
        console.log('useEffect -------------------');
        console.log('audio', audio);
        console.log('auplaydio', play);
        console.log('source', source);
        console.log('useEffect -------------------');
    }, [audio, play, source]);

    const onFetchAudio = () => {

        console.log('onFetchAudio');

        const url = 'http://localhost:8080/api/br/public/v1/test/wav';
        const data = {};

        axios({
            method: 'post',
            url: url,
            // responseType: 'stream',
            responseType: 'blob',
            data: data,
        })
        // axios.post(url)
        .then(response => {

            console.log('response', response);
            console.log('response.status', response.status);
            console.log('response.headers[content-type]', response.headers['content-type']);
            console.log('response.headers[content-length]', response.headers['content-length']);
            console.log('response.headers[content-disposition]', response.headers['content-disposition']);
            console.log('response.data', response.data);

            const blob = response.data;
            console.log('blob', blob);

            const url = window.URL.createObjectURL(blob);
            setSource(url);
            setAudio(new Audio(url));
            
        })
        .catch(error => {
            console.log('error', error);
        });
    }

    return (
        <div>
            <h2>AudioFile</h2>

            <div>
                <button onClick={onFetchAudio}>fetchAudio</button>
            </div>

            <div>
                <ReactAudioPlayer
                    src={source}
                    autoplay
                    controls
                />
            </div>

        </div>
    );
}

export default AudioFile;
