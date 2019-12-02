import React, { Component } from 'react'
import styled from 'styled-components'

import './Carousel.css'

const CarouselContainer = styled.div`
    display: flex;
    margin: 0 0 20px 20px;
    transition: ${(props) => props.sliding ? 'none' :
        'transform 1s ease'};

    transform: ${(props) => {
        if (!props.sliding) return 'translateX(calc(-100% - 20px))'
        if (props.direction === 'prev') return 'translateX(calc(2 * (-100% - 20px)))'
        return 'translateX(0%)'
    }}
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CarouselSlot = styled.div`
    flex: 1 0 100%;
    order: ${(props) => props.order}
`

export default class Carousel extends Component {

    state = {
        position: 0,
        sliding: false,
        direction: 'next',
    }


    getOrder(itemIndex) {
        const { position } = this.state
        const { children } = this.props
        const numItems = children.length || 1

        if (itemIndex - position < 0) {
            return numItems - Math.abs(itemIndex - position)
        }

        return itemIndex - position
    }


    nextSlide = () => {
        const { position } = this.state
        const { children } = this.props
        const numItems = children.length || 1
        this.handleSliding('next',
            position === numItems ? 0 : position + 1)
    }


    prevSlide = () => {
        const { position } = this.state
        const { children } = this.props
        const numItems = children.length
        this.handleSliding('prev',
            position === 0 ? numItems - 1 : position - 1)
    }


    handleSliding = (direction, position) => {
        this.setState({
            sliding: true,
            direction,
            position,
        })

        setTimeout(() => {
            this.setState({
                sliding: false
            })
        }, 50)
    }


    render() {
        const { children } = this.props

        return (
            <div className='carousel-wrapper'>
                <Wrapper>
                    <CarouselContainer
                        sliding={this.state.sliding}
                        direction={this.state.direction}>

                        {children.map((child, i) => {

                            return <CarouselSlot
                                key={i}
                                order={this.getOrder(i)} >
                                {child}
                            </CarouselSlot>

                        })}

                    </CarouselContainer>
                </Wrapper>
                <img
                    src='/svg/keyboard_arrow_left-24px.svg'
                    alt='back'
                    className='slider prev'
                    onClick={this.prevSlide} />

                <img
                    src='/svg/keyboard_arrow_right-24px.svg'
                    alt='next'
                    className='slider next'
                    onClick={this.nextSlide} />

            </div >
        )
    }
}