import React from 'react';
import projectText from './ProjectText';
import { CheckOutlined } from '@ant-design/icons';

const ProjectTextGen = ({ subject }) => {
  const project = projectText[0];
  // console.log(project);
  // console.log(project[subject].title);

  return (
    <React.Fragment>
      <div className='projectItemTitle'>
        <span>{project[subject].title}</span>
        <span>{project[subject].date}</span>
      </div>
      <div className='projectItemCon'>
        <span><CheckOutlined />프로젝트 내용</span>
        <span><p>{project[subject].contents}</p></span>
        <span><CheckOutlined />업무</span>
        <span><p>{project[subject].position}</p></span>
        <span><CheckOutlined />front-end</span>
        {project[subject].frontEnd ? <span><p>{project[subject].frontEnd}</p></span> : <span><p>없음</p></span>}
        <span><CheckOutlined />back-end</span>
        {project[subject].backEnd ? <span><p>{project[subject].backEnd}</p></span> : <span><p>없음</p></span>}
        <span><CheckOutlined />db</span>
        {project[subject].db ? <span><p>{project[subject].db}</p></span> : <span><p>없음</p></span>}
        <span><CheckOutlined />결과</span>
        <span><p>{project[subject].result}</p></span>
      </div>
    </React.Fragment>
  )
}

export default ProjectTextGen;