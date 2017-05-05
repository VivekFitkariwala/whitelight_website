import React, { Component } from "react";
import ReactDom from "react-dom";
import {
    HashRouter as Router,
} from 'react-router-dom'
import Routes from "./Routes";
import createHistory from 'history/createBrowserHistory';
if (process.env.BROWSER) {
    require('../css');
    require('../asset/font/Molleat.otf');
    require('../asset/font/fontawesome-webfont.woff2');
}

export default class AppRoutes extends Component {
    render() {
        return (
            <Router>
                <Routes />
            </Router>
        )
    }
}