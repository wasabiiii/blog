import React from 'react'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import { Link, NavLink }    from 'react-router-dom';
require('./style.css');

class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="navbar">
                    <ul role="nav">
                        <li>
                            {/*<IndexLink to="/" >
                                HOME
                            </IndexLink>*/}
                            <NavLink exact activeClassName="active" to="/">
                                HOME
                            </NavLink>
                        </li>
                        <li><NavLink to="/about" activeClassName="active">
                            归档
                        </NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">
                            ABOUT
                        </NavLink></li>
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>

        )
    }
}

export default Header;