import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Nav";

const Main = ({ children }) => {
    return (
        <>
            <div>
                <h3>front Layout</h3>
                <Header/>
            </div>
            <div>
                <Nav/>
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default Main;
