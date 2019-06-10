import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import One from './one';
import Two from './two';
class Index extends Component {
    render() {
        return (
            <div>
                <header>我是头部</header>
                <Switch>
                    <Route path="/demo/one" component={One} ></Route>
                    <Route path="/demo/two" component={Two} ></Route>
                </Switch>
                <footer>我是尾部</footer>
            </div>
        )
    }
}
export default Index;