import React from 'react';
import c3 from 'c3';

class AverageCheckRub extends React.Component {

    componentDidMount() {
        this.test = c3.generate({
            bindto:this.char,
            size: {
                width:250,
                height:250
            },
            data: {
                columns: [
                    ['Payout via refund', 3000],
                    ['Authorization', 1500],
                    ['Confirm', 2500],
                    ['Purchase', 1400],
                    ['Reccuring', 1400]
                ],

                type: 'pie'
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

export default AverageCheckRub;