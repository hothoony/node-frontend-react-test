import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Nav from "./common/Nav";

const AdminLayout = ({ children }) => {
    return (
        <>
            <div>
                <h3>AdminLayout</h3>
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

export default AdminLayout;
