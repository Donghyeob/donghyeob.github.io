import React, { useEffect, useRef } from 'react';
import CareerText from './CareerText';
import { Table } from 'antd';

const columns1 = [
  {
    title: '근무기간',
    dataIndex: 'date',
    key: 'date',
    width: '20%',
    align: 'center',
  },
  {
    title: '회사명',
    dataIndex: 'coName',
    key: 'coName',
    width: '20%',
    align: 'center',
  },
  {
    title: '직책',
    dataIndex: 'position',
    key: 'position',
    width: '20%',
    align: 'center',
  },
  {
    title: '담당업무',
    dataIndex: 'task',
    key: 'task',
    width: '40%',
    align: 'center',
  },
];

const columns2 = [
  {
    title: '근무기간',
    dataIndex: 'date',
    key: 'date',
    width: '20%',
    align: 'center',
  },
  {
    title: '회사명',
    dataIndex: 'coName',
    key: 'coName',
    width: '40%',
    align: 'center',
  },
  {
    title: '직책',
    dataIndex: 'position',
    key: 'position',
    width: '40%',
    align: 'center',
  }
];

let columns = window.innerWidth > 768 ? columns1 : columns2

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
                columns={columns}
              >
              </Table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Career;