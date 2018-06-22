import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                  <div className="container">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <span className="sr-only">切换导航</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      </button>
                      {/*<a href="#" className="navbar-brand nav-title">加油啦</a>*/}
                      <Link className="navbar-brand nav-title" to="/">
                          加油啦
                      </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                      <ul className="nav navbar-nav navbar-right">
                        <li className="cative">
                            <NavLink exact activeClassName="active" to="/">
                                HOME
                            </NavLink>
                        </li>
                        <li className="cative">
                            <NavLink to="/about" activeClassName="active">
                                归档
                            </NavLink>
                        </li>
                        <li className="cative">
                            <NavLink to="/about" activeClassName="active">
                                ABOUT
                            </NavLink>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </nav> 
            </div>

        )
    }
}

export default Header;