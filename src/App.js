import React, {Component} from 'react';
import Navigation from './Navigation';
import DepositTypes from './DepositTypes';
import CardBrands from './CardBrands';
import EscoBar from './EscoBar';
import Map from './Map';
import SideBar from './sidebar';
import Card from './card';
import './App.css';

class App extends Component {


    render() {
        return (
            <div className="App">
                <Navigation />
                <SideBar />
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
            </div>
        );
    }
}

export default App;
