import React from 'react';
import Intro from './Contents/Intro';
import About from './Contents/About';
import Skills from './Contents/Skills';
import Project from './Contents/Project';
import Career from './Contents/Career';

const Contents = ({ setAboutY, setSkillsY, setProjectY, setCareerY }) => {
  return (
    <React.Fragment>
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop" style={{ backgroundImage: 'url(/wave-top.png)' }}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={{ backgroundImage: 'url(/wave-mid.png)' }}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom" style={{ backgroundImage: 'url(/wave-bot.png)' }}></div>
        </div>
      </div>
      <div className='container'>
        <Intro />
        <About setAboutY={setAboutY} />
        <Skills setSkillsY={setSkillsY} />
        <Project setProjectY={setProjectY} />
        <Career setCareerY={setCareerY} />
      </div>
    </React.Fragment>
  )
}

export default Contents;