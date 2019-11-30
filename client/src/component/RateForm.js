import React, { Component } from 'react'
import axios from 'axios'

import './RateForm.css'


export default class RateForm extends Component {
    state = {
        stars: [
            {
                count: 1,
                src: 'svg/star_border-24px.svg'
            },
            {
                count: 2,
                src: 'svg/star_border-24px.svg'
            },
            {
                count: 3,
                src: 'svg/star_border-24px.svg'
            },
            {
                count: 4,
                src: 'svg/star_border-24px.svg'
            },
            {
                count: 5,
                src: 'svg/star_border-24px.svg'
            },
        ],
        starValue: 0,
        comment: '',
        submitted: false,
    }


    submitHandler = async () => {
        try {
            await axios.post('/api/v1/rate/',
                {
                    stars: this.state.starValue,
                    comment: this.state.comment,
                })
            this.setState({ submitted: true })
        }
        catch (e) {
            console.error("Unable to submit rating.")
            console.error(e)
        }
    }

    handleChange = (e) => {
        const previousState = { ...this.state }
        previousState[e.target.name] = e.target.value
        this.setState(previousState)
    }

    starHandler = (e) => {
        const previousStars = [...this.state.stars]
        const starValue = e.target.id
        const starIndex = starValue - 1

        for (let i = 4; i >= 0; i--) {
            if (i > starIndex) {
                previousStars[i].src = 'svg/star_border-24px.svg'
            }

            else {
                previousStars[i].src = 'svg/star-24px.svg'
            }
        }

        this.setState({
            stars: previousStars,
            starValue: parseInt(starValue)
        })
    }


    render() {
        return (
            <div className='rateform-container'>
                {this.state.submitted ?
                    <p>Form Submitted</p> :
                    null
                }

                <div className='star-container'>
                    {this.state.stars.map((star, i) => {
                        return <img src={star.src}
                            alt='star'
                            id={star.count}
                            key={i}
                            onClick={this.starHandler} />
                    })}
                </div>

                <textarea
                    onChange={this.handleChange}
                    placeholder='Comments...'
                    name='comment' />

                <button onClick={this.submitHandler}>
                    Submit
                </button>
            </div>
        )
    }
}