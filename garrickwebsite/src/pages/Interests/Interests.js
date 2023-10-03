import React from "react";
import "./Interests.css";
import garrickchiu from './garrickchiu.jpg';
import videogames from './videogames.png';
import rockclimbing from './rockclimbing.jpg'
import biking from './biking.jpg'
import drawing from './drawing.png'

function Interests() {
    return (
        <interets className="interets">
            <div className="intereststitle">
                <h1>Interests (WIP :D)</h1>
            </div>
            <div classsName="flexbox">
                <div className="interestlist">
                    <div className="interestbox">
                        <div className="interestimg"><img src={videogames} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Video Games</h1></div>
                            <div className="interestdescription">
                                <p>Delving into diverse gaming worlds is one of my favorite pasttimes. I try my best to try all new types of games. Any reocmmendations are welcome!</p>
                                <p>Take a look through my gaming experiences and explore my ratings on my <a href="https://www.backloggd.com/u/YanaWanas/" target="_blank">Backlogged</a></p>
                                <p>I also share my insights and monthly gaming reviews on my <a href="https://www.youtube.com/@garrickchiu6635/videos" target="_blank">YouTube</a> channel</p>
                                <p>My favorite game of all-time is Hollow Knight!</p>
                                <p>Beyond playing games, I harbor a passion for creating them and am currently 
                                spearheading a team to develop a new game!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="interestbox">
                        <div className="interestimg"><img src={garrickchiu} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Running</h1></div>
                            <div className="interestdescription">
                                <p>Running, especially 3-4 times a week, ranks as my favorite exercise</p>
                                <p>Achieving a runner's high, synchronized with awesome music, is one of the
                                   greatest feelings in the world.
                                </p>
                                <p>I predominantly indulge in long-distance running</p>
                                <p>Presently, I am training for a half marathon, with aspirations to conqueror a
                                   full marathon in the future.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="interestbox">
                        <div className="interestimg"><img src={biking} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Biking</h1></div>
                            <div className="interestdescription">
                                <p>Similar to running, biking offers a serene and pleasant escape for me</p>
                                <p>I love to appreciate nature and observing city life during my rides</p>
                                <p>My favorite route is the San Gabriel River Trail all the way to Long Beach</p>
                                <p>The longest and furthest I biked was 60 miles in 6 hours :D</p>
                            </div>
                        </div>
                    </div>
                    <div className="interestbox">
                        <div className="interestimg"><img src={rockclimbing} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Rock Climbing</h1></div>
                            <div className="interestdescription">
                                <p>Recently picked up this hobby and having a blast</p>
                                <p>It's challenging but really fun at the same time</p>
                                <p>Currently, I can only do v0-v2, but I hope to get to v4-v5 by the end of the year</p>
                            </div>
                        </div>
                    </div>
                    <div className="interestbox">
                        <div className="interestimg"><img src={drawing} alt=''/></div>
                        <div className="interestsmallbox">
                            <div className="interestname"><h1>Drawing</h1></div>
                            <div className="interestdescription">
                                <p>I hope to get really good at drawing one day</p>
                                <p>I am fascinated by art and love looking all kinds of drawings. Manga art from Berserk, One Piece, Hunter x Hunter and Elden Ring, Sekiro concept art.
                                    These are all so amazing </p>
                                <p>If you're into video game character concept design or animation, send me an email! :D
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