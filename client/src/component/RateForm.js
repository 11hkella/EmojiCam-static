import React, { Component } from 'react'


import './RateForm.css'


export default class RateForm extends Component {
    state = {
        starts: 5,
        comment: '',
    }
    render() {
        return (
            <div className='rateform-container'>
                <textfield onChange={handleChange} />
            </div>
        )
    }
}