import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Three from './three';
import Four from './four';
class One extends Component {
    render() {
        return (
            <div>
                <div>我是第一块</div>
                <Switch>
                    <Route path="/demo/one" exact component={Three} ></Route>
                    <Route path="/demo/one/first" component={Four} ></Route>
                </Switch>
            </div>
        )
    }
}
export default One;