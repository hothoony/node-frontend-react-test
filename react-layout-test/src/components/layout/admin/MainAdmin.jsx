import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Nav";

const MainAdmin = ({ children }) => {
    return (
        <>
            <div>
                <h3>admin Layout</h3>
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

export default MainAdmin;
