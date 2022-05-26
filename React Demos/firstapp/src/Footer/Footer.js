// const Footer = () => {
//     return(
//         <h3>Stackroute &copy; 2022</h3>
//     )
// }

// export default Footer;

import React from "react";
import './Footer.css';
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <h3>Stackroute &copy; 2022</h3>
            </div>
        )
    }    
}

export default Footer;

// Phases of React Component
// 1. initial rendering
// 2. Updating
// 3. Unmounting