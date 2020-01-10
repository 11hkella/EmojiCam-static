import React, { Component } from 'react'

import EmojiCam from './EmojiCam.js'
import RateForm from './RateForm.js'

import './CamPage.css'


export default class CamPage extends Component {
    state = {
        happyPath: 'images/cool.png',
        neutralPath: 'images/neutral.png',
        angryPath: 'images/angry.png',
        disgustPath: 'images/disgust.png',
        fearPath: 'images/fear.png',
        sadPath: 'images/crying.png',
        surprisePath: 'images/surprised.png',
        rating: false,
    }


    toggleRateForm = () => {
        this.setState({ rating: !this.state.rating })
    }


    render() {
        return (
            <div className='cam-page-container'>
                <div className='camera-container'>
                    <EmojiCam
                        happyPath={this.state.happyPath}
                        neutralPath={this.state.neutralPath}
                        angryPath={this.state.angryPath}
                        disgustPath={this.state.disgustPath}
                        fearPath={this.state.fearPath}
                        sadPath={this.state.sadPath}
                        surprisePath={this.state.surprisePath} />
                </div>

                {this.state.rating ?
                    <div className='form-container'>
                        <RateForm
                            toggleRateForm={this.toggleRateForm} />
                    </div>
                    :
                    null
                }
                <button
                    className='rateform-button'
                    onClick={this.toggleRateForm}>
                    Rate<br /><span>this</span><br />App
                </button>

            </div>
        )
    }
}