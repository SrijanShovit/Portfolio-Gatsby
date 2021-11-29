import React from 'react';
import Navbar from './Navbar'

//import global.css in file where component will be present everywhere in site
import '../styles/global.css'

//children in props represent anything that is nested inside Layout component in other file
export default function Layout ({children}) {
    return (
        <div className="layout">
            <Navbar/>
            
            <div className="content">
                {/* content for each page */}
                {children}

            </div>

            <footer>
                <p>Copyright 2021 Srijan Shovit</p>
            </footer>
            
        </div>
    );
}
