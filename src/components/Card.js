import React from "react";
import Icon from  "./star.png"

export default function Card(){
    return (
        <div className="card">
            <div className="swimImg"></div>
            <p className="swimImgInfo">
                <img src={Icon} alt="star" className="star"/>
                <h4 className="rating">5.0</h4>
                <h5 className="country">(6).USA</h5>
                <p className="moreInfo">Life lessons with Katie Zaferes</p>
                <p className="price"> <strong>From $136 </strong>/ person</p>
            </p>
            </div>
    )
}