import React from 'react';
import Project from '../Project/Project';
import {Element} from "react-scroll";
import "./ProjectContainer.css";


const ProjectContainer = () => {
   const projects=[
    {
       img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
       title:"Facebook",
       desc:
       "description · ​. a piece of writing or speech that says what somebody/something is like; the act of writing or saying in words what somebody/something is like."
    },
    {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"Facebook",
        desc:
        "description · ​. a piece of writing or speech that says what somebody/something is like; the act of writing or saying in words what somebody/something is like."
     },
     {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"Facebook",
        desc:
        "description · ​. a piece of writing or speech that says what somebody/something is like; the act of writing or saying in words what somebody/something is like."
     },
     {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"Facebook",
        desc:
        "description · ​. a piece of writing or speech that says what somebody/something is like; the act of writing or saying in words what somebody/something is like."
     },
     {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"Facebook",
        desc:
        "description · ​. a piece of writing or speech that says what somebody/something is like; the act of writing or saying in words what somebody/something is like."
     },
     {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"Facebook",
        desc:
        "description · ​. a piece of writing or speech that says what somebody/something is like; the act of writing or saying in words what somebody/something is like."
     }];
        
    return (
        <Element  className="projectContainer" id="projects">
            <h1>Projects</h1>
            <p>
                Here are some projects which i done for making lives of people easy.
            </p>
            <div className="projectContainer__projects">

{
            projects.map((project,index)=>{
            return(
                <Project
                  key={index}
                  img={project.img}
                  title={project.title}
                  desc={project.desc}
                  link={project.link}
               />
            );
            }
            )
}          
             </div>
        </Element>
    )
}

export default ProjectContainer;
