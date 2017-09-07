import React from 'react';
import c3 from 'c3';

class Donut extends React.Component {

    componentDidMount() {
        this.test = c3.generate({
            bindto:this.char,
            data: {
                columns: [
                    ['data1', 30],
                    ['data2', 120]
                ],
                type: 'donut'
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

export default Donut;
