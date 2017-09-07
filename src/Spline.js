import React from 'react';
import c3 from 'c3';

class Spline extends React.Component {

    componentDidMount() {
        this.test = c3.generate({
            bindto: this.char,
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250]
                ],
                type: 'spline'
            }
        });
    }

    render() {
        return (
            <div style={{height: 400}} ref={(char) => this.char = char}>
            </div>
        );
    }
}

export default Spline;
