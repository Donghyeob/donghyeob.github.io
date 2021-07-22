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
  }, [])

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
              <UserOutlined />
              <div>
                <span>이름</span><br />
                <span>강동협</span>
              </div>
            </div>
            <div>
              <CalendarOutlined />
              <div>
                <span>생년월일</span><br />
                <span>1992.02.27</span>
              </div>
            </div>
            <div>
              <EditOutlined />
              <div>
                <span>학력</span><br />
                <span>동의대학교<br />
                  소프트웨어융합학과(석사)</span>
              </div>
            </div>
            <div>
              <PhoneOutlined />
              <div>
                <span>연락처</span><br />
                <span>010.5301.5545</span>
              </div>
            </div>
            <div>
              <MailOutlined />
              <div>
                <span>이메일</span><br />
                <span>donghyeob.k@gmail.com</span>
              </div>
            </div>
            <div>
              <GithubOutlined />
              <div>
                <span>깃허브</span><br />
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