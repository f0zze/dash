import React from 'react';
import c3 from 'c3';

class CardBrands extends React.Component {

    componentDidMount() {
        this.test = c3.generate({
            bindto:this.char,
            data: {
                columns: [
                    ['data1', 30],
                    ['data2', 120],
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
