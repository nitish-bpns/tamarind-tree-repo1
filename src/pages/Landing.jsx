import React from 'react'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>

            This is Landing Page of TTT

            <br /><br />

            <Link to="/second" >
                Click here to see Design Items
            </Link>



        </div>
    )
}

export default Landing;