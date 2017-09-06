import React from 'react';
import c3 from 'c3';

class CardBrands extends React.Component {

    componentDidMount() {
        this.test = c3.generate({
            bindto:this.char,
            data: {
                columns: [
                    ['VISA', 3000],
                    ['MASTERCARD', 1500],
                    ['MAESTRO', 2500],
                    ['MIR', 1400],
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

export default CardBrands;
