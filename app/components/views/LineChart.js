import * as React from "react";
import '../../../public/styles/line-chart.css';

export default function LineChart() {
    return(
        <div className="line-container">
            <div className="content-line">
                <div className="legend-line">
                    {'R$ 12.000,00'}
                </div>
                <div className="line"/>
            </div>
            <div className="content-line">
                <div className="legend-line">
                    {'R$ 10.000,00'}
                </div>
                <div className="line"/>
            </div>
            <div className="content-line">
                <div className="legend-line">
                    {'R$ 8.000,00'}
                </div>
                <div className="line"/>
            </div>
            <div className="content-line">
                <div className="legend-line">
                    {'R$ 6.000,00'}
                </div>
                <div className="line"/>
            </div>
            <div className="content-line">
                <div className="legend-line">
                    {'R$ 4.000,00'}
                </div>
                <div className="line"/>
            </div>
            <div className="content-line">
                <div className="legend-line">
                    {'R$ 2.000,00'}
                </div>
                <div className="line"/>
            </div>
            <div className="bottom-line">
                <div className="legend-line" />
                <div className="bar">
                    <div className="revenue"/>
                    <div className="expenditure"/>
                </div>
            </div>
        </div>
    )
}