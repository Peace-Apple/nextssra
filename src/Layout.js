import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.module.css';
import { Header } from "./Header";

export class Layout extends React.Component {
    render() {
        const {children} = this.props

        return (
            <React.Fragment>
                <Header />
                {children}
            </React.Fragment>
        );
    }
}
