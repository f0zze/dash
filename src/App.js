import React, {Component} from 'react';
import Navigation from './Navigation';
import WorldMap from 'react-world-map';
import SideBar from './SideBar';
import Panel from './Panel';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Panel title="Revenue Growth" hint={() => <div>Revenue euro</div>}>
                                body
                            </Panel>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Panel title="Revenue" hint={() => <div>Revenue euro</div>}>
                                <WorldMap />
                            </Panel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
