import React from 'react';

import Map from '../../Map';
import Donut from '../../Donut';
import Spline from '../../Spline';

import './style.css';

const Gray = () => {
    return (
        <div className="greay-card">

        </div>
    );
};

const DashboardHotSpot = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 stat-card">
                    <div className="stats stats-100">One</div>
                </div>
                <div className="col-3 stat-card">
                    <div className="stats stats-100"></div>
                </div>
                <div className="col-3 stat-card">
                    <div className="stats stats-100"></div>
                </div>
                <div className="col-3 stat-card">
                    <div className="stats stats-100"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <div className="row">
                        <div className="col-12 stat-card">
                            <div className="stats stats-100">212</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 stat-card">
                           <div className="stats stats-full">1223</div>
                        </div>
                    </div>
                </div>
                <div className="col-6 stat-card">
                    <div className="stats">
                        <Spline />
                    </div>
                </div>
                <div className="col-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="stats stats-100">325</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 stat-card">
                            <div className="stats">down</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6 stat-card">
                    <div className="stats">
                        <Donut />
                    </div>
                </div>
                <div className="col-6 stat-card">
                    <div className="stats">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHotSpot;

