import * as React from "react";
import PieChart from './PieChart';
import LineChart from './LineChart';
import '../../../public/styles/total-tab.css';

export default function TotalTab() {
    return(
        <div >
            <div className="col-md-12 content">
                <div className="col-md-3 content-link">
                    <div className="item">
                        <div className="ic-md ic-total">
                            {'$'}
                        </div>
                        <span>{'TOTAIS'}</span>
                    </div>
                    <div className="item off">
                        <div className="ic-md ic-customer"/>
                        <span>{'CLIENTES'}</span>
                    </div>
                </div>
                <div className="col-md-7 header-info">
                    <div className="title">
                        {'VALOR TOTAL'}
                    </div>
                    <div className="sub-title">
                        <span className="ad-sub">{'R$'}</span>
                        <h1>{'10.178,60'}</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="col-md-3"/>
                <div className="col-md-7">
                    <div className="col-md-5">
                        <div className="title">
                            {'SERVIÇOS'}
                        </div>
                        <PieChart />

                        <div className="info-service">
                            <div>
                                <div className="content-legend"><span className="legend bath-and-cough"/> {'BANHO & TOSA'}</div>
                                <div className="total-item">{'R$ 6.445,25 (50%)'}</div>
                            </div>

                            <div>
                                <div className="content-legend"><span className="legend consultations"/> {'CONSULTAS'}</div>
                                <div className="total-item">{'R$ 3.867,15 (30%)'}</div>
                            </div>
                            <div>
                                <div className="content-legend"><span className="legend medicines"/> {'MEDICAMENTOS'}</div>
                                <div className="total-item">{'R$ 2.578,10 (20%)'}</div>
                            </div>
                            <div className="total-service">
                                <div>{'TOTAL'}</div>
                                <div>{'R$ 12.890,50 (100%)'}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"/>
                    <div className="col-md-5">
                        <div className="title">
                            {'DESPESAS X RECEITAS'}
                        </div>
                        <LineChart/>
                        <div className="info-revenue-expenditure">
                            <div>
                                <div className="content-legend"><span className="legend revenue"/> {'RECEITAS'}</div>
                                <div className="total-item">{'R$ 12.890,50 (50%)'}</div>
                            </div>
                            <div>
                                <div className="content-legend"><span className="legend expenditure"/> {'DESPESAS'}</div>
                                <div className="total-item">{'R$ 2.711,90 (30%)'}</div>
                            </div>
                        </div>
                        </div>
                </div>
                <div className="col-md-3"/>
            </div>
        </div>
    )
}