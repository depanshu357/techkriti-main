import React from 'react';
import Sidenav from './sidenav';

const Layout = ({children}) => {
    return(
        <>
        
        <Sidenav/>        
        {/* <main>{children}</main> */}
        </>
    )
}

export default Layout;

