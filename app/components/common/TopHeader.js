import React from 'react';
import '../../../public/styles/top-header.css'

export default function TopHeader(){
    return (
        <div className="content-header">
            <nav className="navbar">
                <div className="navbar-header">
                    <a href="#">
                        <div className="ic-md ic-menu"></div>
                    </a>
                </div>
                <div className="bread-crumb">
                        <span>
                            {'PETSHOP'}
                        </span>
                    <div className="separator"/>
                    <span>
                            {'MEU FATURAMENTO'}
                        </span>
                </div>
            </nav>
        </div>
    )
}