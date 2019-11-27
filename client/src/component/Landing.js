import React, { Component } from 'react'
import StartButton from './StartButton.js'
import Welcome from './Welcome.js'

import './Landing.css'


export default class Landing extends Component {
    render() {
        return (
            <div className='landing-container'>
                <Welcome />
                <StartButton />
            </div >
        )
    }
}