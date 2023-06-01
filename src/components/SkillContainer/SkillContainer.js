import React from 'react';
import {Element}from "react-scroll";
import skillimg from"../../assets/kishore.jpg.jpg";
import "./SkillContainer.css"
import LinearProgress from"@material-ui/core/LinearProgress";

const SkillContainer = () => {
  return (
   <Element ClassName="skillContainer" id="skills">
    <div className='skillContainer__image'>

      <img src={skillimg} alt=""/>
      
     </div>
     <div className="skillContainer__text">
        <h2>SKILLSET</h2>
        <div className='skillContainer__skillset'>
          <h5>
            JavaScriptm  
          </h5>
          <div className='skillContainer__slider  skillContainer__slider1'>
            <LinearProgress variant="determinate" value={90}/>
            </div>
          </div>
          <div className='skillContainer__skillset'>
          <h5>
            Bootstarap  
          </h5>
          <div className='skillContainer__slider  skillContainer__slider2'>
            <LinearProgress variant="determinate" value={75}/>

          </div>

        </div>
        </div>
          <div className='skillContainer__skillset'>
          <h5>
            Node Js 
          </h5>
          <div className='skillContainer__slider  skillContainer__slider3'>
            <LinearProgress variant="determinate" value={65}/>

          </div>
          </div>
          <div className='skillContainer__skillset'>
          <h5>
            React.js  
          </h5>
          <div className='skillContainer__slider  skillContainer__slider4'>
            <LinearProgress variant="determinate" value={70}/>

          </div>
          </div>
          <div className='skillContainer__skillset'>
          <h5>
            Csss  
          </h5>
          <div className='skillContainer__slider  skillContainer__slider5'>
            <LinearProgress variant="determinate" value={90}/>

          </div>
          </div>
          <div className='skillContainer__skillset'>
          <h5>
            MongoDB  
          </h5>
          <div className='skillContainer__slider  skillContainer__slider6'>
            <LinearProgress variant="determinate" value={65}/>

          </div>
      </div>
   </Element>

  );
};

export default SkillContainer 