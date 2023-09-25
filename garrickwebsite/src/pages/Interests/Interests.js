import React from "react";
import "./Interests.css";
import garrickchiu from './garrickchiu.jpg';

function Interests() {
    return (
        <interets className="interets">
            <div className="intereststitle">
                <h1>Interests</h1>
            </div>
            <div classsName="flexbox">
                <div className="interestlist">
                    <div className="interestbox">
                        <div className="interestimg"><img src={garrickchiu} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Video Games</h1></div>
                            <div className="interestdescription">
                                <p>One of my favorite things to do in my pasttime</p>
                                <p>I have a backlogged where I rate all of the games that I play</p>
                                <p>I also have a YouTube channel where I do monthly reivews of the games 
                                   games I played that month</p>
                                <p>My favorite game of alltime is Hollow Knight</p>
                                <p>In addition to playing games, I also love to create games. 
                                   I am currently leading a team developing a game!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="interestbox">
                        <div className="interestimg"><img src={garrickchiu} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Running</h1></div>
                            <div className="interestdescription">
                                <p>Favorite sport or exercise to do. I run about 3-4 times a week</p>
                                <p>Getting a runner's high while listening to awesome music is one of the
                                   greatest feelings in the world.
                                </p>
                                <p>Mostly a long-distance runner</p>
                                <p>Currently training for a half marathon and hopefully be able to run a 
                                   full marathon in the future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </interets>
    )
}

export default Interests;