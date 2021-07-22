import React from 'react';
import { CheckOutlined } from '@ant-design/icons';

const ProjectTextGen = ({ object }) => {
  return (
    <React.Fragment>
      <div className='projectItemTitle'>
        <span>{object.title}</span>
        <span>{object.date}</span>
      </div>
      <div className='projectItemCon'>
        <span><CheckOutlined />프로젝트 내용</span>
        <span><p>{object.contents}</p></span>
        <span><CheckOutlined />업무</span>
        <span><p>{object.position}</p></span>
        <span><CheckOutlined />front-end</span>
        {object.frontEnd ? <span><p>{object.frontEnd}</p></span> : <span><p>없음</p></span>}
        <span><CheckOutlined />back-end</span>
        {object.backEnd ? <span><p>{object.backEnd}</p></span> : <span><p>없음</p></span>}
        <span><CheckOutlined />db</span>
        {object.db ? <span><p>{object.db}</p></span> : <span><p>없음</p></span>}
        <span><CheckOutlined />결과</span>
        <span><p>{object.result}</p></span>
      </div>
    </React.Fragment>
  )
}

export default ProjectTextGen;