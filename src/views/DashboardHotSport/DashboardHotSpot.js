import React from 'react';
import bar from './charts/bar.PNG';

import Map from '../../Map';
import Spline from '../../Spline';
import Donut from '../../Donut';
import Card from '../../Card';
import Pie from './charts/AverageCheckRub';

import './style.css';

const donut = [
    ['VISA', 3000],
    ['MASTERCARD', 1500],
    ['MAESTRO', 2500],
    ['MIR', 1400],
];

const Header = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '70%'}} className="input-group">
                <input value="show me turnover by bank cards splited by card issuer" type="text"
                       className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
              <button className="btn btn-primary" type="button">
                     <i className="fa fa-search" aria-hidden="true" />
              </button>
         </span>
            </div>
            <button style={{marginLeft: 'auto'}} className="btn btn-primary">Actions</button>
        </div>
    );
};

const DashboardHotSpot = (props) => {
    return (
        <Card header={Header}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 stat-card">
                        <div className="stats">
                            <div className="chart-head">
                                Total Transaction Amount by Payment Instrument Type
                            </div>
                            <Donut data={donut}/>
                        </div>
                    </div>
                    <div className="col-6 stat-card">
                        <div className="stats">
                            <div className="chart-head">
                                Total Transaction Amount by Merchant Country
                            </div>
                            <Map/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12 stat-card">
                                <div className="stats stats-300">
                                    <div className="chart-head">
                                        Average check RUB
                                    </div>
                                    <Pie/>
                                </div>
                            </div>
                            <div className="col-12 stat-card">
                                <div className="stats stats-100">
                                    <div className="stat-title">
                                        Transaction amount EUR
                                    </div>
                                    <div className="stat-si-num">
                                        119M
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 stat-card">
                        <div className="stats">
                            <div className="chart-head">
                                Transaction amount RUB
                            </div>
                            <Spline/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12 stat-card">
                                <img src={bar} alt=""/>
                            </div>
                            <div className="col-12 stat-card">
                                <div className="stats stats-100">
                                    <div className="stat-title">
                                        Avg of unique count transaction volume
                                    </div>
                                    <div className="stat-si-num">
                                        150K
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 stat-card">
                                <div className="stats stats-100">
                                    <div className="stat-title">
                                        Transaction amount RUB
                                    </div>
                                    <div className="stat-si-num">
                                        23.8B
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 stat-card">
                                <div className="stats stats-100">
                                    <div className="stat-title">
                                        Transaction amount USD
                                    </div>
                                    <div className="stat-si-num">
                                        3.91B
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default DashboardHotSpot;

