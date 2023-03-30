const EnvView = () => {

    let apiHost = 'no profile';
    if (process.env.REACT_APP_BUILD_ENV === 'development') apiHost = process.env.REACT_APP_API_HOST_DEV;
    if (process.env.REACT_APP_BUILD_ENV === 'production') apiHost = process.env.REACT_APP_API_HOST_PRD;

    return (
        <div>
            <div>
                EnvView
            </div>
            <div>
                apiHost = {apiHost}
            </div>
        </div>
    );
}

export default EnvView;
