import React from 'react'
import CardItem from './cardItem'

import "./cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out These Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <CardItem src="images/img-9.jpg" text="Explore The He Amazon Jungleall"
                        label="Adventure"
                        path="/services" />
                        <CardItem src="images/img-3.jpg" text="Explore Tidhe Amazon Jungleall"
                        label="Explore"
                        path="/services" />
                        <CardItem src="images/img-4.jpg" text="Explore The He The Amazon Jungleall"
                        label="Nature"
                        path="/services" />
                        <CardItem src="images/img-5.jpg" text="Explore The HiIne Amazon Jungleall"
                        label="Explore"
                        path="/services" />
                        <CardItem src="images/img-7.jpg" text="Explore  The Amazon Jungleall"
                        label="Nature"
                        path="/services" />
                        <CardItem src="images/img-8.jpg" text="Explore  The Amazon Jungleall"
                        label="Desurt"
                        path="/services" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
