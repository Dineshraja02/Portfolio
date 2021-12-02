import React from 'react';
import {Element} from "react-scroll";
import Experience from '../ExperienceBox/Experience';
import "./ExperienceContainer.css";


const ExperienceContainer = () => {
    return (
        <Element className="experienceContainer" id="exp">
            <h1>Experience</h1>
        <div className="experienceContainer__info">
            <Experience number="+10" title="clients"/>
            <Experience number="+60" title="Projects" style={{backgroundColor:"#f64c08"}}/>
            <Experience number="6+" title="Teaching"/>
            <Experience number="+10" title="Students Got trained"/>
        </div>
        </Element>
    )
}

export default ExperienceContainer;
