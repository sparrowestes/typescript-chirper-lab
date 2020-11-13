import React from 'react';
import { Link } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = () => {
    return (
        <>
        <div className="background">
    <div className="navbar">
        <div className="container flex">
            <h1 className="logo">Chirper</h1>
            <nav>
                <ul>
                    <li><Link to="/"><button className="btn btn-outline mx-3">Home</button></Link></li>
                    <li><Link to="/chirp/add"><button className="btn btn-outline mx-3">Add Chirp</button></Link></li>
                </ul>
            </nav>
        </div>
    </div>
    </div>



            {/* <div className="showcase">
                <div className="navbar">
                    <Link to="/"><h1>Chirpr</h1></Link>
                    <div className="navbar">
                        <Link to="/"><button className="btn btn-outline mx-3">Home</button></Link>
                        <Link to="/chirp/add"><button className="btn btn-outline mx-3">Add Chirp</button></Link>
                    </div>
                </div>
            </div> */}
        </>
    )
}

interface INavbarProps { }

export default Navbar