import React from 'react';
import './DepositTypes.css';

const Number = (props) => {
    return (
        <div style={{backgroundColor: `rgba(${props.color},0.6)`}} className="char-num">
            <div className="chart-num-header">
                {props.title}
            </div>
            <div style={{color: `rgb(${props.color})`, fontSize: props.size}} className="chart-num-body">
                {props.value}
            </div>
        </div>
    );
};


class DepositTypes extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row num-space">
                    <div className="col-12">
                        <Number
                            size="111"
                            color="208, 238, 220"
                            value="55%"
                            title="CREDIT"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <Number
                            size="55"
                            color="194, 223, 246"
                            value="30%"
                            title="DEBIT"/>
                    </div>
                    <div className="col-4">
                        <Number
                            size="55"
                            color="223, 213, 159"
                            value="15%"
                            title="CHARGE"/>
                    </div>
                </div>
            </div>
        );
    }
}


export default DepositTypes;
