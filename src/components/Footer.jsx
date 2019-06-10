import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/topics">Topics</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Footer;