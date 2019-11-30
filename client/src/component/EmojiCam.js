import React, { Component } from 'react'
import Webcam from 'react-webcam'
import * as faceapi from 'face-api.js';

import './EmojiCam.css'


export default class EmojiCam extends Component {
    state = {
        happyImg: null,
        neutralImg: null,
        angryImg: null,
        disgustImg: null,
        fearImg: null,
        sadImg: null,
        surpriseImg: null,
        loaded: false,
    }


    async componentDidMount() {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/models'),
            this.loadImages()
        ]).then(() => {
            console.log('models and images all loaded')
            this.setState({ loaded: true })
        })
    }


    loadImages = () => new Promise((resolve, reject) => {
        try {
            //happy
            const happyImg = new Image()
            happyImg.src = '/images/cool.png'
            // neutral
            const neutralImg = new Image()
            neutralImg.src = "/images/neutral.png"
            //angry
            const angryImg = new Image()
            angryImg.src = "/images/angry.png"
            //disgust
            const disgustImg = new Image()
            disgustImg.src = "/images/disgust.png"
            // fear
            const fearImg = new Image()
            fearImg.src = "/images/fear.png"
            //sad
            const sadImg = new Image()
            sadImg.src = "/images/crying.png"
            //surprise
            const surpriseImg = new Image()
            surpriseImg.src = "/images/surprised.png"

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
        catch (error) {
            console.error(error)
            reject('Image cannot load')
        }
    })


    mediaHandler = () => {
        const videoEl = document.getElementById('video')
        const displaySize = {
            width: videoEl.width + 200,
            height: videoEl.height + 200,
        }
        const canvas = faceapi.createCanvas(displaySize)
        canvas.id = 'videoCanvas'
        document.getElementById('videoContainer').append(canvas)
        faceapi.matchDimensions(canvas, displaySize)

        setInterval(async () => {
            const faceDetectionOptions = new faceapi.TinyFaceDetectorOptions({ inputSize: 320 })
            const detections = await faceapi.detectAllFaces(videoEl, faceDetectionOptions)
                .withFaceExpressions()


            if (detections) {
                const resizedDetections = faceapi.resizeResults(detections, displaySize)

                // erase board then draw new one
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

                this.drawEmoji(resizedDetections)
            }
        }, 800)
    }


    drawEmoji = (detections) => {
        const context = document.getElementById('videoCanvas').getContext('2d')
        for (let i = 0; i < detections.length; i++) {
            // get position and size
            const x = detections[i].detection._box._x
            const y = detections[i].detection._box._y
            const width = detections[i].detection._box._width
            const height = detections[i].detection._box.height

            //get dominant emotion
            let emoSort = ['']
            const emotions = detections[i].expressions
            if (emotions) {
                emoSort = Object.keys(emotions)
                    .sort(function (a, b) { return emotions[b] - emotions[a] })
                // console.log(emoSort)
            }
            const dominantEmo = emoSort[0]

            // draw corrosponding emotion pic
            if (dominantEmo === 'happy') {
                context.drawImage(this.state.happyImg, x, y, width, height)
            } else if (dominantEmo === 'neutral') {
                context.drawImage(this.state.neutralImg, x, y, width, height)
            } else if (dominantEmo === 'angry') {
                context.drawImage(this.state.angryImg, x, y, width, height)
            } else if (dominantEmo === 'surprised') {
                context.drawImage(this.state.surpriseImg, x, y, width, height)
            } else if (dominantEmo === 'sad') {
                context.drawImage(this.state.sadImg, x, y, width, height)
            } else if (dominantEmo === 'disgusted') {
                context.drawImage(this.state.disgustImg, x, y, width, height)
            } else if (dominantEmo === 'fearful') {
                context.drawImage(this.state.fearImg, x, y, width, height)
            }
        }
    }


    render() {
        const videoConstraints = {
            width: window.screen.width * .7,
            height: window.screen.width / 2.2,
            facingMode: 'user'
        };

        return (
            <div className='emoji-cam' id='videoContainer'>
                {this.state.loaded ?
                    <Webcam
                        id='video'
                        width={videoConstraints.width}
                        height={videoConstraints.height}
                        audio={false}
                        videoConstraints={videoConstraints}
                        onUserMedia={this.mediaHandler}
                    ></Webcam>
                    :
                    null}
            </div>
        )
    }
}