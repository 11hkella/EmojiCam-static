import React, { Component } from 'react'

import StartButton from './StartButton.js'
import Welcome from './Welcome.js'

import './Landing.css'


export default class Landing extends Component {

    componentDidMount() {
        if ("geolocation" in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords.latitude)
                    console.log(position.coords.longitude)
                },
                function errorCallback(error) {
                    alert('ERROR(' + error.code + '): ' + error.message);
                })

        } else {
            /* geolocation IS NOT available */
            console.log("browser does not support geolocation")
        }
    }

    render() {
        return (
            <div className='landing-container'>
                <Welcome />
                <StartButton />
            </div >
        )
    }
}