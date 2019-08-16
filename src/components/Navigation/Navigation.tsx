import React from "react"
import "./Navigation.css"
import logo from '../../img/personal-logo.svg'
import {Link } from "react-router-dom"


class Navigation extends React.Component<{},{}> {
    render() {
        return (
            <div>
                <img src={logo} alt='my-personal-logo'/>
                <ul>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/about'> About </Link>
                    </li>
                    <li>
                        <Link to='/skills'> Skills </Link>
                    </li>
                    <li>
                        <Link to='/experience'> Experience </Link>
                    </li>
                    <li>
                        <Link to='/contact'> Contact </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation