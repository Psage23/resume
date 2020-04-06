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

            <div>
                <img src={crayons} alt="small child coloring" />
                <a href="https://musing-mestorf-ff86eb.netlify.com/">Luncher App</a>
                <p>The goal for this project is to build a website for School
                Adminstators to raise money for students that are not able to pay for
                their lunch.
                </p>
            </div>

            <div>
                <img src={space} alt="Astronaut in Space" />
                <a href="https://ecstatic-cray-6496a4.netlify.com/">SpaceWalker</a>
                 <p>This is a project that is styled by CSS only.</p>
            </div>

            <div>
                <img src={yellowVan} alt="Yellow bus" />
                <a href="https://ecstatic-ramanujan-b53ffe.netlify.com/" class="link">Fun Bus Website</a>
                <p>This website is a fun example of animations and providing more User
                experience.</p>
            </div>
                
           <div>
               <img src={profilecard} alt="Lambda and GitHub icons" />
               <a href="https://hungry-edison-51c1af.netlify.com" class="link">GitHub User Card</a>
                <p>Using JavaScript to add elements to the html I am able to create a
                list of User Profiles.</p>
           </div>
            
    </section>
    )
}