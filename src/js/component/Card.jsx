import React from "react";
import '../../styles/card.css';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Card = () => {
    return (

        <div className="card1">
            <div className="Cardgrande">
                <div className="card-body">
                    <h5 className="card-title">A Warm Welcome!</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem quos dignissimos suscipit impedit voluptatibus
                        beatae possimus facilis nobis ullam! Nihil dolor mollitia, facere illum a ex soluta molestias magni.</p>
                    <a href="#" className="btn btn-primary">Call to action!</a>

                </div>
            </div>
        </div>
    );
};

export default Card;
