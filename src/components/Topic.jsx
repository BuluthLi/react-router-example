import React, { Component } from 'react';
class Topic extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    componentDidUpdate() {
        console.log('数据更新：', this.props.location.query.hai);
    }
    render() {
        let html = '瞎选一个吧';
        if (this.props.location.query !== undefined && this.props.location.query.hai) {
            html = this.props.location.query.hai;
        }
        return (
            <div className="Topic">
                {html}
            </div>
        );
    }
}
export default Topic;