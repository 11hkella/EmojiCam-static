import React, { Component } from 'react'

import './Welcome.css'


export default class Welcome extends Component {
    render() {
        return (
            <div className='welcome-container'>
                <h1>Welcome!</h1>

                <p>Get ready to turn into an emoji. Utilizing the power of machine learning algorithms as well as pre-trained facial recognition models, Emoji Cam has the power to locate faces features and detect expresions in real time! </p>
            </div >
        )
    }
}