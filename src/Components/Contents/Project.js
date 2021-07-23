import React, { useEffect, useRef, useState } from 'react';
import ProjectText from './ProjectText';
import ProjectTextGen from './ProjectTextGen';

const Project = ({ setProjectY }) => {
  const projectRef = useRef(null);
  const [start, setStart] = useState(2);
  const [end, setEnd] = useState(4);
  const [sliceArray, setSliceArray] = useState(ProjectText.slice(0, 2));

  const onClickMore = () => {
    let addArray = ProjectText.slice(start, end);
    setStart(start + 2);
    setEnd(end + 2);
    setSliceArray([...sliceArray, ...addArray]);

    // console.log(sliceArray);
  }

  useEffect(() => {
    setProjectY(projectRef.current.offsetTop);
  })

  return (
    <React.Fragment>
      <div className='projectWrap' ref={projectRef}>
        <div className='containerItem'>
          <span className='contentTitle'>Project</span>
        </div>
        <hr className='contentTail' />
        <div className='containerItem'>
          <div className='projectBox'>
            {sliceArray.map((object) => (
              <div className='projectItem' key={object.key}>
                <ProjectTextGen object={object} />
              </div>
            ))}
          </div>
          {end < ProjectText.length + 2 ? <div className='moreButton' onClick={onClickMore}>더 보기</div> : ''}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Project;