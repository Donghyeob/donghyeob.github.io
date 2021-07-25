import React, { useEffect, useRef } from 'react';
import {
  UserOutlined,
  CalendarOutlined,
  EditOutlined,
  PhoneOutlined,
  MailOutlined,
  GithubOutlined
} from '@ant-design/icons';

const About = ({ setAboutY }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    setAboutY(aboutRef.current.offsetTop);
  })

  return (
    <React.Fragment>
      <div className='aboutWrap' ref={aboutRef}>
        <div className='containerItem'>
          <span className='contentTitle'>About</span>
        </div>
        <hr className='contentTail' />
        <div className='containerItem'>
          <div className='aboutBox'>
            <div>
              <div>
                <UserOutlined />
                <span>이름</span>
              </div>
              <div>
                <span>강동협</span>
              </div>
            </div>
            <div>
              <div>
                <CalendarOutlined />
                <span>생년월일</span>
              </div>
              <div>
                <span>1992.02.27</span>
              </div>
            </div>
            <div>
              <div>
                <EditOutlined />
                <span>학력</span>
              </div>
              <div>
                <span>동의대학교<br />소프트웨어융합학과(석사)</span>
              </div>
            </div>
            <div>
              <div>
                <PhoneOutlined />
                <span>연락처</span>
              </div>
              <div>
                <span>010.5301.5545</span>
              </div>
            </div>
            <div>
              <div>
                <MailOutlined />
                <span>이메일</span>
              </div>
              <div>
                <span>donghyeob.k@gmail.com</span>
              </div>
            </div>
            <div>
              <div>
                <GithubOutlined />
                <span>깃허브</span>
              </div>
              <div>
                <a href='https://github.com/Donghyeob' target='blank'>https://github.com/Donghyeob</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About;