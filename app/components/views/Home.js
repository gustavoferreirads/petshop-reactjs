import React, { Component } from 'react';
import TotalTab from './TotalTab';
import '../../../public/styles/home.css';


class Home extends Component {
    render() {
        return (
                <div >
                    <div className="buttons">
                        <div className="btn btn-default">
                            {'HOJE'}
                        </div>
                        <div className="btn btn-md btn-inactive">
                            {'ÚLTIMA SEMANA'}
                        </div>
                        <div className="btn btn-md btn-inactive">
                            {'ÚLTIMO MÊS'}
                        </div>
                        <div className="btn btn-md btn-inactive">
                            {'OUTRO PERÍODO'}
                        </div>
                    </div>
                    <TotalTab/>
                </div>
        )
    }

}

export default Home