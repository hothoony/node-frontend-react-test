import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Nav from "./common/Nav";

const FrontLayout = ({ children }) => {
    return (
        <>
            <div>
                <h3>FrontLayout</h3>
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

export default FrontLayout;
