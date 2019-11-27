import React, { Component } from 'react'

import EmojiCam from './EmojiCam.js'

import './CamPage.css'


export default class CamPage extends Component {
    render() {
        return (
            <div className='cam-page-container'>
                <EmojiCam />
            </div>
        )
    }
}