import React, {Component} from 'react';
import DepositTypes from './DepositTypes';
import CardBrands from './CardBrands';
import EscoBar from './EscoBar';
import Map from './Map';
import Card from './Card';
import DashboardHotSport from './views/DashboardHotSport';

import './App.css';

class App extends Component {
    view1 = () => {
        return (
            <div className="container">
                <div className="row row-space">
                    <div className="col-12">
                        <Card title="REVENUE GROWTH">
                            <EscoBar />
                        </Card>
                    </div>

                </div>
                <div className="row row-space">
                    <div className="col-12">
                        <Card title="REVENUE">
                            <Map />
                        </Card>
                    </div>
                </div>
                <div className="row row-space">
                    <div className="col-6">
                        <Card title="CARD BRANDS">
                            <CardBrands />
                        </Card>
                    </div>
                    <div className="col-6">
                        <Card title="DEPOSIT TYPES">
                            <DepositTypes />
                        </Card>
                    </div>
                </div>
            </div>
        );
    };

    view3 = () => {
        return <div className="container">
            <DashboardHotSport />
        </div>
    };


    render() {
        return (
            <div className="App">
                {this.view3()}
            </div>
        );
    }
}

export default App;
