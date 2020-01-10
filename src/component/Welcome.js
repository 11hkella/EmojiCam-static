import React, { Component } from 'react'

import './Welcome.css'


export default class Welcome extends Component {
    render() {
        return (
            <div className='welcome-container'>
                <h1>Welcome to EmojiCam!</h1>

                <p>Turn your facial expression into an emoji. Utilizing the power of machine learning algorithms as well as pre-trained facial recognition models, EmojiCam has the power to locate facial features and detect expressions in real time! </p>
            </div >
        )
    }
}