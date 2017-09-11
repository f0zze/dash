import React from 'react';
import c3 from 'c3';

class Bar extends React.Component {

    static defaultProps = {
        width: 10
    };

    componentDidMount() {
        this.test = c3.generate({
            bindto: this.char,
            data: {
                columns: this.props.data,
                type: 'bar'
            },
            bar: {
                width: this.props.width

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

export default Bar;
