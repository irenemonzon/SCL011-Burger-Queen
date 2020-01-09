import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';


function Nav () {
    return (
        <div className="container-routing">
                <ul>
                    <li>
                    <Link to="/navigation/waiter">Meserx</Link>

                    </li>
                     <li>
                        <Link to="/navigation/kitchen">Cocina</Link>
                    </li>
                </ul>  
                    
        </div>
       
    );
}

export default Nav;