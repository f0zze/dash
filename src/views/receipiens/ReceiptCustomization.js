import React from 'react';
import './style.css';
import FormCard from '../../FormCard';
import Palet from './palet';

class ReceiptCustomization extends React.Component {

    render() {
        return (
            <div className="rec-customization">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="row row-space">
                                <div className="col-12">
                                    <FormCard>
                                        <div className="form-group">
                                            <label for="xxx">Receipt options</label>
                                            <select type="select"
                                                   className="form-control"
                                                   id="xxx"
                                                   >
                                                <option value="" disabled selected>Choose fields to show</option>
                                            </select>
                                        </div>
                                    </FormCard>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <FormCard>
                                        <div className="green-box">
                                            <Palet
                                                hash="#89BBFE"
                                                colorFor="Header color"/>
                                        </div>
                                        <div className="green-box">
                                            <Palet
                                                hash="#615D6C"
                                                colorFor="Header content color"/>
                                        </div>
                                        <div className="green-box">
                                            <Palet
                                                hash="#6F8AB7"
                                                colorFor="Footer color"/>
                                        </div>
                                    </FormCard>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    other
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ReceiptCustomization;
