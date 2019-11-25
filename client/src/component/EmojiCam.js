import React, { Component } from 'react'

// import nodejs bindings to native tensorflow,
// not required, but will speed up things drastically (python required)
//import '@tensorflow/tfjs-node';

// implements nodejs wrappers for HTMLCanvasElement, HTMLImageElement, ImageData
import * as canvas from 'canvas';

import * as faceapi from 'face-api.js';

// patch nodejs environment, we need to provide an implementation of
// HTMLCanvasElement and HTMLImageElement, additionally an implementation
// of ImageData is required, in case you want to use the MTCNN
const { Canvas, Image, ImageData } = canvas
faceapi.env.monkeyPatch({ Canvas, Image, ImageData })

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
        this.loadAssets()
    }

    loadImages = new Promise((resolve, reject) => {
        try {
            //happy
            const happyImg = new Image()
            happyImg.src = "./images/cool.png"
            // neutral
            const neutralImg = new Image()
            neutralImg.src = "./images/neutral.png"
            //angry
            const angryImg = new Image()
            angryImg.src = "./images/angry.png"
            //disgust
            const disgustImg = new Image()
            disgustImg.src = "./images/disgust.png"
            // fear
            const fearImg = new Image()
            fearImg.src = "./images/fear.png"
            //sad
            const sadImg = new Image()
            sadImg.src = "./images/crying.png"
            //surprise
            const surpriseImg = new Image()
            surpriseImg.src = "./images/surprised.png"

            this.setState({
                happyImg,
                neutralImg,
                angryImg,
                disgustImg,
                fearImg,
                sadImg,
                surpriseImg,
            })
            resolve('Images loaded');
        }
        catch {
            reject('Image cannot load')
        }
    })

    loadAssets = () => {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/models'),
            this.loadImages
        ]).then(() => {
            console.log('models all loaded')
        })
    }




    render() {
        return (
            <div className='emoji-cam' id='emojiCam' >
                <video id='video' autoPlay muted></video>
            </div>
        )
    }
}