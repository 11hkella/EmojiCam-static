import React, { Component } from 'react'
import axios from 'axios'

import Carousel from './Carousel.js'
import StartButton from './StartButton.js'
import Welcome from './Welcome.js'
import Instructions from './Instructions.js'

import './Landing.css'


export default class Landing extends Component {
    componentDidMount() {
        // save users geolocation and date accessed
        if ("geolocation" in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // axios.post('/api/v1/session/', {
                    //     latitude: position.coords.latitude,
                    //     longitude: position.coords.longitude,
                    // })
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
                <Carousel>
                    <StartButton />

                    <Welcome />

                    <Instructions />

                </Carousel>
            </div >
        )
    }
}