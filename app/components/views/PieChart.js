import * as React from "react";
import '../../../public/styles/pie-chart.css';

export default function PieChart() {
    return(
        <div className="pie-container">
            <div className="p1 bath-and-cough"/>
            <div className="p2 consultations"/>
            <div className="p3 medicines"/>
            <div className="separator-pie"/>
            <div className="ball"/>
        </div>
    )
}