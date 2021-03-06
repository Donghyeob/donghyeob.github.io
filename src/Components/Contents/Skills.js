import React, { useEffect, useRef } from 'react';

const Skills = ({ setSkillsY }) => {
  const skillsRef = useRef(null);

  useEffect(() => {
    setSkillsY(skillsRef.current.offsetTop);
  })

  return (
    <React.Fragment>
      <div className='skillsWrap' ref={skillsRef}>
        <div className='containerItem'>
          <span className='contentTitle'>Skills</span>
        </div>
        <hr className='contentTail' />
        <div className='containerItem skillsItem'>
          <div className='skillsBox'>
            <span>Front-end</span>
            <hr />
            <div className='boxItems'>
              <div>
                <span>&nbsp;&nbsp;HTML5</span>
                <img src='/html5.png' alt='html5' />
              </div>
              <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;CSS3</span>
                <img src='/css3.png' alt='css3' />
              </div>
              <div>
                <span>Vanilla JS</span>
                <img src='/js.png' alt='js' />
              </div>
              <div>
                <span>&nbsp;&nbsp;Jquery</span>
                <img src='/jquery.png' alt='jquery' />
              </div>
              <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;React</span>
                <img src='/react.png' alt='react' />
              </div>
              {/* <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;Redux</span>
                <img src='/redux.png' alt='redux' />
              </div> */}
              {/* <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saga</span>
                <img src='/saga.png' alt='saga' />
              </div> */}
            </div>
          </div>
          <div className='skillsBox'>
            <span>Back-end</span>
            <hr />
            <div className='boxItems'>
              <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;Node</span>
                <img src='/node.png' alt='node' />
              </div>
              <div>
                <span>&nbsp;&nbsp;&nbsp;Spring</span>
                <img src='/spring.png' alt='spring' />
              </div>
            </div>
            <hr className='Skilldiv' />
            <span>Infra</span>
            <hr />
            <div className='boxItems'>
              <div>
                <span>WebLogic</span>
                <img src='/weblogic.png' alt='weblogic' />
              </div>
              <div>
                <span>&nbsp;&nbsp;Jenkins</span>
                <img src='/jenkins.png' alt='jenkins' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Skills;