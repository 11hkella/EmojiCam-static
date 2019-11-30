import React, { Component } from 'react'
import axios from 'axios'

import EmojiCam from './EmojiCam.js'
import RateForm from './RateForm.js'

import './CamPage.css'


export default class CamPage extends Component {
    state = {
        happyPath: null,
        neutralPath: null,
        angryPath: null,
        disgustPath: null,
        fearPath: null,
        sadPath: null,
        surprisePath: null,
    }


    async componentDidMount() {
        const imageSetObject = await axios.get('/api/v1/image_set')
        const imageSet = imageSetObject.data[0]
        // console.log(imageSet)
        this.setState({
            happyPath: imageSet.happy,
            neutralPath: imageSet.neutral,
            angryPath: imageSet.angry,
            disgustPath: imageSet.disgust,
            fearPath: imageSet.fear,
            sadPath: imageSet.sad,
            surprisePath: imageSet.surprise,
        })
    }


    render() {
        return (
            <div className='cam-page-container'>
                {/* <div className='camera-container'>
                    <EmojiCam
                        happyPath={this.state.happyPath}
                        neutralPath={this.state.neutralPath}
                        angryPath={this.state.angryPath}
                        disgustPath={this.state.disgustPath}
                        fearPath={this.state.fearPath}
                        sadPath={this.state.sadPath}
                        surprisePath={this.state.surprisePath} />
                </div> */}

                <div className='form-container'>
                    <RateForm />
                </div>
            </div>
        )
    }
}