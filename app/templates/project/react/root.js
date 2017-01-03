
import React, {Component, render} from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import indexPage from './page/index/index';


export default class Root extends Component{
    render() {
        return(
            <Router>
				<IndexRoute component={indexPage} />
				<Route path="/" component={indexPage} />
            </Router>
        );
    }
}