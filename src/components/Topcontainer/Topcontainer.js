import React from 'react';
import { Element } from 'react-scroll';
import TopContent from '../Topcontent/TopContent';
import "./Topcontainer.css";

const Topcontainer = () => {
  return (
    <Element name='about' className='topcontainer'>
        <TopContent/>
    </Element>
  
  )
}

export default Topcontainer;