import React, { Component } from 'react'

export default class EmojiCam extends Component {
    state = {
        video: null,
        detections: [],
        canvas: null,
        context: null,
        displaySize: {},
        faceDetectionOptions: new faceapi.TinyFaceDetectorOptions({ inputSize: 320 }),
        happyImg: null,
        neutralImg: null,
        angryImg: null,
        disgustImg: null,
        fearImg: null,
        sadImg: null,
        surpriseImg: null,
    }

    componentDidMount() {
        const video = document.getElementById('video')
        const displaySize = {
            width: video.width,
            height: video.height
        }
        this.setState({ video, displaySize })
    }


    render() {
        return (
            <div class='emoji-cam' id='emojiCam'>
                <video id='video' autoplay muted></video>
            </div>
        )
    }
}