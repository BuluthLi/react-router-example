import React, { Component } from 'react';
class Three extends Component {
    render() {
        return (
            <div>
                <div onClick={() => {
                    this.props.history.push('/demo/one/first');
                }}>我是第三块</div>
            </div>
        )
    }
}
export default Three;