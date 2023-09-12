import React, {Component} from "react";
import Link from 'next/link'

export class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="navbar" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" legacyBehavior>
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/speakers" legacyBehavior>
                                <a className="nav-link">Speakers</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sessions" legacyBehavior>
                                <a className="nav-link">Sessions</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
