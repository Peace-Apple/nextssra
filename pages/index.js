import React from "react";
import DigitalClock from "../src/DigitalClock";
import axios from 'axios';
import Link from "next/link";

class Index extends React.Component {
    static async getInitialProps () {
        // return ({
        //     time: new Date().toISOString()
        // });
        var promise = axios.get('http://localhost:4000/speakers').
        then(response => {
            return {
                hasErrored: false,
                speakerData: response.data
            };
        })
            .catch(error => {
                return {
                    hasErrored: true,
                    message: error.message
                }
            });
        return promise;
    }

    constructor(props) {
        super(props);
        this.state = {
            // time: props.time
            hasErrored: props.hasErrored,
            message: props.message,
            speakerData: props.speakerData
        }
    }

    // tick() {
    //     this.setState(() => {
    //         return ({
    //             time: new Date().toLocaleString()
    //         });
    //     });
    // }

    // componentDidMount() {
    //     this.interval = setInterval(() => this.tick(), 1000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }


    render() {
        // return <DigitalClock time={this.state.time}></DigitalClock>
        return (
            <div>
                <Link href='/sessions' legacyBehavior>
                <a>SESSIONS</a>
                </Link>
                <ul>
                    {this.state.speakerData?(this.state.speakerData.map((speaker) =>
                        <li key={speaker.id}>
                            {speaker.firstName} {speaker.lastName}
                        </li>
                    )):''}
                </ul>
            </div>
        )
    }
}

export default Index;
