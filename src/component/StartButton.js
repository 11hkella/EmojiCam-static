import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './StartButton.css'


export default class StartButton extends Component {
    render() {
        return (
            <div className='start-button-container'>
                <Link to='/video'>
                    <button>
                        Start EmojiCam
                    </button>
                </Link>
            </div >
        )
    }
}