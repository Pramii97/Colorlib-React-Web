import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home(){
    return (
        <div className="home">


           <div className="slide-show">
               <div className="slide-show-element">
                    <p>Todays talant Tomorrow success</p>
                    <h1>We Are The Best Consulting Agency</h1>
                    <Link to="/services"><button type="button" class="btn btn-outline-primary">Our Services</button></Link>               
               </div>{/* slide-show-element */}
               
           </div> {/* slide-show */}

           <div className="body">
               <div className="bodytop">
                    <h2>Our Main Features</h2>
                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
               </div>
               
                <div className="organization content">
                    <h4>Organization</h4>
                    <p>Far far away, behind the word mountains, far the countries Vokalia.</p>
                </div>

                <div className="marketing content">
                    <h4>Marketing Strategy</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                </div>

                <div className="riskanalysis content">
                    <h4>Risk Analysis</h4>
                    <p>Far far away, behind the word mountains, far the countries Vokalia</p>
                </div>

                <div className="capitalmarket content">
                    <h4>Capital Market</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                </div>

           </div>

           <div className="sidebar">
                <div className="img3">

                </div>
               <h5>Read Our Success Story for Inspiration</h5>
               <p>Far far away, behind the word mountains, far from the counties Vokalia and Consonantia, there live the blind texts. Separated they live Bookmarksgrove right at the coast of the coast of the Semantics, a large  language ecean.</p>
               <p>On her way she met a copy. The copy warned the little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word</p>
                <br />
               <button type="button" class="btn btn-outline-primary">Contact Us</button>

           </div>
           
        </div>
    )
}

export default Home;