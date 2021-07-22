import React, { useEffect, useRef } from 'react';
import ProjectTextGen from './ProjectTextGen';

const Project = ({ setProjectY }) => {
  const projectRef = useRef(null);

  useEffect(() => {
    setProjectY(projectRef.current.offsetTop);
  }, [])

  return (
    <React.Fragment>
      <div className='projectWrap' ref={projectRef}>
        <div className='containerItem'>
          <span className='contentTitle'>Project</span>
        </div>
        <hr className='contentTail' />
        <div className='containerItem'>
          <div className='projectBox'>
            <div className='projectItem'>
              <ProjectTextGen subject={'vista'} />
            </div>
            <div className='projectItem'>
              <ProjectTextGen subject={'mubby'} />
            </div>
            <div className='projectItem'>
              <ProjectTextGen subject={'webpage'} />
            </div>
            <div className='projectItem'>
              <ProjectTextGen subject={'mockchart'} />
            </div>
            <div className='projectItem'>
              <ProjectTextGen subject={'imagesend'} />
            </div>
            <div className='projectItem'>
              <ProjectTextGen subject={'skhynix'} />
            </div>
            <div className='projectItem'>
              <ProjectTextGen subject={'testserver'} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Project;