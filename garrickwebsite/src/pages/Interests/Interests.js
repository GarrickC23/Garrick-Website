import React from "react";
import "./Interests.css";
import garrickchiu from './garrickchiu.jpg';

function Interests() {
    return (
        <interets className="interets">
            <div className="intereststitle">
                <h1>Interests (WIP :D)</h1>
            </div>
            <div classsName="flexbox">
                <div className="interestlist">
                    <div className="interestbox">
                        <div className="interestimg"><img src={garrickchiu} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Video Games</h1></div>
                            <div className="interestdescription">
                                <p>One of my favorite things to do in my pasttime</p>
                                <p>I have a backlogged where I rate all of the games that I play https://www.backloggd.com/u/YanaWanas/</p>
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
                    <div className="interestbox">
                        <div className="interestimg"><img src={garrickchiu} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Biking</h1></div>
                            <div className="interestdescription">
                                <p>Pretty much the same as running. A very chill and nice time</p>
                                <p>I love to enjoy the nature and city around when I bike</p>
                            </div>
                        </div>
                    </div>
                    <div className="interestbox">
                        <div className="interestimg"><img src={garrickchiu} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Rock Climbing</h1></div>
                            <div className="interestdescription">
                                <p>Recently picked up this hobby and having a blast</p>
                                <p>It's challenging but really fun at the same time</p>
                            </div>
                        </div>
                    </div>
                    <div className="interestbox">
                        <div className="interestimg"><img src={garrickchiu} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Drawing</h1></div>
                            <div className="interestdescription">
                                <p>One hobby that I hope to get very good at someday</p>
                                <p>I am fascinated by art and love looking all kinds of styles</p>
                                <p>If you are interested in video game character concept design/animation
                                   send me an email :D
                                </p>
                                <p>I'm slowly learning bits and pieces. Here are some examples of my art!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </interets>
    )
}

export default Interests;