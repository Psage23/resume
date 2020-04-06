import React from 'react';
import computer from '../images/computer.jpg';
import lightbulb from '../images/lightbulb.jpg';
import crayons from '../images/crayons.jpg';
import space from '../images/space.jpg';
import yellowVan from '../images/yellowVan.jpg';
import profilecard from '../images/profilecard.png';


export default function Projects() {
    return (
        <section class="projects">
            <div class="one">
                <img src={computer} alt="Person working on computer" />
                <div>
                    <h2>Cool Article Website</h2>
                    <p>HTML and CSS project styled to <br /> provide easier User experience.</p>
                    <button><a href="https://relaxed-jackson-19a773.netlify.com">Click Here To View</a></button>
                </div>  
            </div>
            
            <div class="two">
                <div>
                    <h2>Great Idea!</h2>
                    <p>Responsive design project is fun way to design websites</p>
                    <button><a href="https://psage23.github.io/UI-III-Flexbox/">Click Here To Visit</a></button>
                </div>
                <img src={lightbulb} alt="light bulb"/>
            </div>

            <div class="three">
                <img src={crayons} alt="small child coloring" />
                <div>
                    <h2>Luncher</h2>
                    <p>The goal for this project is to build a website for School<br/>
                    Adminstators to raise money for students that are not able to pay <br/> for
                    their lunch.
                    </p> 
                   <button><a href="https://musing-mestorf-ff86eb.netlify.com/">Click Here To Visit</a></button>
                </div> 
            </div>

            <div class="four">
                <div>
                    <h2>SpaceWalker</h2>
                    <p>This is a project that is styled by CSS only.</p>
                    <button><a href="https://ecstatic-cray-6496a4.netlify.com/">Click Here To Visit</a></button>
                </div>
                <img src={space} alt="Astronaut in Space" />
            </div>

            <div class="five">
                <img src={yellowVan} alt="Yellow bus" />
                <div>
                    <h2>Fun Bus Website</h2>
                    <p>This website is a fun example of animations and providing more User
                    experience.</p>
                    <button><a href="https://ecstatic-ramanujan-b53ffe.netlify.com/">Click Here To Visit</a></button>
                </div>
            </div>
                
           <div class="six">
               <div>
                   <h2>GitHub User Card</h2>
                    <p>Using JavaScript to add elements to <br/> the html I am able to create a
                    list of User Profiles.</p>
                    <button><a href="https://hungry-edison-51c1af.netlify.com">Click Here To Visit</a></button>
               </div>
               <img src={profilecard} alt="Lambda and GitHub icons" />
           </div>
            
    </section>
    )
}