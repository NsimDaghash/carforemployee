import React from "react";
import Navbar from "./navbar";
import SearchBar from "./searchBar";
import Users from "./pageContent";

 const Home = () =>{
    return(
        <div className="homepage">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <SearchBar />
                <Users />
            </div>
        </div>
    )
}

export default Home