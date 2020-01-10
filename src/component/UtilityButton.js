import React, { Component } from 'react'

import './UtilityButton.css'

export default class UtilityButton extends Component {
    render() {
        return (
            <div>
                <button
                    className='utility-button'
                    onClick={this.props.function}>
                    {this.props.title}
                </button>
            </div>
        )
    }
}