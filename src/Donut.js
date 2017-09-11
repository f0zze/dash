import React from 'react';
import c3 from 'c3';

class Donut extends React.Component {

    componentDidMount() {
        this.test = c3.generate({
            bindto:this.char,
            data: {
                columns: this.props.data,
                type: 'donut'
            },
            donut: { width: 52 }
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
