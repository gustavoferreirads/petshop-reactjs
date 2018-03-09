import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import '../../../public/styles/navegation.css'

class Navigation extends Component {

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    render() {
        return (
                <nav id="nav" className="navigation" role="">
                        <div className="nav-menu">
                            <div className="nav-header">
                                <div className="logo-element" />
                            </div>
                            <div className={`menu-content ${this.activeRoute("/home")}`}>
                                <Link to="/home">
                                    <div className="ic ic-dashboard"/>
                                    <span className="nav-label">{'Meu Faturamento'}</span>
                                </Link>
                            </div>
                            <div className={`menu-content ${this.activeRoute("/cad")}`}>
                                <Link to="/minor">
                                    <div className="ic ic-cad"/>
                                    <span className="nav-label">{'Cadastro'}</span>
                                </Link>
                            </div>
                        </div>
                </nav>
        )
    }
}

export default Navigation