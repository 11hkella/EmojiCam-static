import React, { Component } from 'react'
import axios from 'axios'

import './Instructions.css'

export default class Instructions extends Component {

    state = {
        expressionKeys: [],
        expressionSrc: [],
    }


    async componentDidMount() {
        const imageSetData = await axios.get('/api/v1/image_set/')
        const expressionKeys = Object.keys(imageSetData.data[0])
        const expressionSrc = Object.values(imageSetData.data[0])

        this.setState({ expressionKeys, expressionSrc })
    }


    render() {
        const expressions = this.state.expressionKeys
        const src = this.state.expressionSrc
        return (
            <div className="instruction-container">

                <h1>Instructions</h1>

                <p className='sub-header'>Pull back hair and remove glasses so EmojCam can see all of your facial features. Make an expression then capture it with the emoji button. Press the clear button to erase all emojis. Also, be sure to allow this app to access your webcam or video device.</p>


                <div className='wrapper'>

                    <div>
                        <p>Express Yourself:</p>

                        <ul>
                            {expressions.map((expression, i) => {
                                return (
                                    <li key={i}>
                                        {expression} :
                                <img alt='emoji' src={src[i]} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <p>Draw Emoji by Clicking Button:</p>

                        <button>: )</button>
                    </div>

                </div>

            </div>
        )
    }
}