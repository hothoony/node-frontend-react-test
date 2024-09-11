import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <div>
                <Link to={'/formTemplate'}>FormTemplate</Link>
            </div>
            <div>
                <h2>react 에서 form 사용하는 방법</h2>
                <ul>
                    <li>
                        <Link to={'/form01'}>1. useState 와 handler 를 사용</Link>
                    </li>
                    <li>
                        <Link to={'/form02'}>2. useRef 를 사용</Link>
                    </li>
                    <li>
                        <Link to={'/form03'}>3. FormData 와 브라우저 API 사용</Link>
                    </li>
                    <li>
                        <Link to={'/form04'}>4. custom hook 을 사용</Link>
                    </li>
                    <li>
                        <Link to={'/form05'}>5. React Forms Library 를 사용</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
