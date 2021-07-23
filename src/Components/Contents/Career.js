import React, { useEffect, useRef } from 'react';
import CareerText from './CareerText';
import { Table } from 'antd';

const { Column } = Table;

const Career = ({ setCareerY }) => {
  const careerRef = useRef(null);

  useEffect(() => {
    setCareerY(careerRef.current.offsetTop);
  })

  return (
    <React.Fragment>
      <div className='careerWrap' ref={careerRef}>
        <div className='containerItem'>
          <span className='contentTitle'>Career</span>
        </div>
        <hr className='contentTail' />
        <div className='containerItem'>
          <div className='careerBox'>
            <div className='careerItem'>
              <Table
                dataSource={CareerText}
                pagination={false}
              >
                <Column title="근무기간" dataIndex="date" key="date" align='center' />
                <Column title="회사명" dataIndex="coName" key="coName" align='center' />
                <Column title="직책" dataIndex="position" key="position" align='center' />
                <Column title="담당업무" dataIndex="task" key="task" align='center' />
              </Table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Career;