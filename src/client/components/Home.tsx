import React from 'react';
import { Link } from "react-router-dom";
import { chirp } from "../types";


const Home: React.FC<IHomeProps> = () => {
    const [chirps, setChirps] = React.useState<chirp[]>([]);

    React.useEffect(() => {
        fetchChirps();
    }, []);

    const fetchChirps = async () => {
        try {
            let res = await fetch("/api/chirps/")
            let chirps: chirp[] = await res.json();
            chirps.reverse();
            setChirps(chirps);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="showcase">

                <div className="container">
                    {chirps.map((chirp: chirp) => (
                        <div key={chirp.id} className="card">
                            <div className="card">
                                <h5 className="card-title">@{chirp.username}</h5>
                                <p className="card-text">{chirp.message}</p>
                                <Link to={`/chirp/${chirp.id}/admin`}>
                                    <button className="btn btn-sm btn-dark">Admin Options</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


interface IHomeProps { }

export default Home

