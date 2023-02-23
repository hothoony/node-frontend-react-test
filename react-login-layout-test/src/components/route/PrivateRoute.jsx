import { Redirect, Route, useHistory, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {

    const location = useLocation();
    const history = useHistory();

    const isLogin = localStorage.getItem('isTestLogin');
    console.log('PrivateRoute isLogin', isLogin, JSON.parse(isLogin), (JSON.parse(isLogin) === true));

    if (!JSON.parse(isLogin)) {
        // history.replace(`/login?redirect=${location.pathname}`);
        // return;

        return (
            <Redirect to={`/login?redirect=${location.pathname}`}/>
        );
    }

    return (
        
        <Route {...rest} />
        
        // <Route
        //     {...rest}
        //     render={({ location }) => {

        //         // console.log('isLogin', JSON.parse(isLogin), (JSON.parse(isLogin) === true));

        //         // if (!JSON.parse(isLogin)) {
        //         //     history.replace(`/login?redirect=${location.pathname}`);
        //         //     return;
        //         // }

        //         return (
        //             children
        //         );
        //     }}
        // />
    );
};

export default PrivateRoute;
