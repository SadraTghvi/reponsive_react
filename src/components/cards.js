import React from 'react'
import CardItem from './cardItem'

import "./cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out These Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/img-9.jpg" text="Explore The Hidden Waterf Deep Inside The Amazon Jungleall"
                        label="Adventure"
                        path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
