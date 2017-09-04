import React from 'react';
import c3 from 'c3';

class EscoBar extends React.Component {

    componentDidMount() {
        this.test = c3.generate({
            bindto: this.char,
            data: {
                columns: [
                    ['data1', -30, 200, 200, 400, -150, 250],
                    ['data2', 130, 100, -100, 200, -150, 50],
                    ['data3', -230, 200, 200, -300, 250, 250]
                ],
                type: 'bar'

            },
            bar: {
                width: 10
            },
            grid: {
                y: {
                    lines: [{value: 0}]
                }
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

export default EscoBar;
