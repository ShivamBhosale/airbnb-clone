import React from "react";
import HeroImg from "./photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={HeroImg} alt="hero" className="HeroImg" />
            <h1>Online Experiences</h1>
            <p className="Info">
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.

            </p>
        </div>
    )
}
