import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import Topic from './Topic';
class Topics extends Component {
    constructor(props) {
        super(props);
        console.log(props.match)
    }
    render() {
        return (
            <div className="topics">
                <p>我是Topics</p>
                <ul>
                    <li>
                        <NavLink to={{ pathname: this.props.match.url, query: { hai: 'Rendering' } }}>Rendering with React</NavLink>
                    </li>
                    <li>
                        <NavLink to={{ pathname: this.props.match.url, query: { hai: 'Components' } }}>Components</NavLink>
                    </li>
                    <li>
                        <NavLink to={{ pathname: this.props.match.url, query: { hai: 'Props' } }}>Props v. State</NavLink>
                    </li>
                </ul>

                <Route path={this.props.match.url} component={Topic} />

            </div>
        );
    }
}
export default Topics;