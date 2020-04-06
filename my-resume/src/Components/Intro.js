import React from 'react';
import arizona from '../images/arizona.jpg';

export default function Intro() {
    return (     
        <div class="intro">
            <img src={arizona} alt="desert mesa" /> 
            <header>
                <h1>Hi, my name is Pamela Sage</h1>
            </header>
            <p>I am a Web Developer with a passion for technology.<br/> See my code below </p>
        </div>
    )
}