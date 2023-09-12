import React from "react";
import DigitalClock from "../src/DigitalClock";
import axios from 'axios';

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
            <ul>
                {this.state.speakerData?(this.state.speakerData.map((speaker) =>
                    <li key={speaker.id}>
                        {speaker.firstName} {speaker.lastName}
                    </li>
                )):''}
            </ul>
        )
    }
}

export default Index;
