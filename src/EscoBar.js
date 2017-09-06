import React from 'react';
import c3 from 'c3';

class EscoBar extends React.Component {

    componentDidMount() {
        this.test = c3.generate({
            bindto: this.char,
            data: {
                columns: [
                    ['up', -30, -200, -100, -400, -150, -250,-30, -200, -100, -400, -150, -250],
                    ['down', 130, 100, 140, 200, 150, 50,130, 100, 140, 200, 150, 50]
                ],
                type: 'bar'
            },
            bar: {
                width: 10

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
