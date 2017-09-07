import React, {Component} from 'react';
import Navigation from './Navigation';
import DepositTypes from './DepositTypes';
import CardBrands from './CardBrands';
import EscoBar from './EscoBar';
import Popup from './Popup';
import Map from './Map';
import SideBar from './SideBar';
import Card from './Card';
import RecepiensView from './views/receipiens';
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

    view2 = () => {
        return (
            <div className="cover">
                <Popup width={900} title="RECEIPT CUSTOMIZATION" open={true}>
                    <RecepiensView />
                </Popup>
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
                <div className="row-space">
                    <Navigation />
                </div>
                <SideBar />
                {this.view3()}
            </div>
        );
    }
}

export default App;
