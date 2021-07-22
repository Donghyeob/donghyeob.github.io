import React, { useState, useEffect } from 'react';
import { Menu, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../Css/main.css';
import '../Css/contents.css';
import Home from '../Components/Home';
import About from '../Components/About';
import Project from '../Components/Project';
import Contact from '../Components/Contact';

const Layout = () => {
  const [menuKey, setMenuKey] = useState({
    current: 'home',
  });
  const [scrollY, setScrollY] = useState(0);
  const [winHeight, setWinHeight] = useState(window.innerHeight - 46);

  // antd menu function
  const handleClick = e => {
    // console.log('click ', e);
    setMenuKey({ current: e.key });
  };

  // scroll Y value
  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  }

  // menu click event
  const clickEvent = (e) => {
    // console.log(e);
    let selector = e.key;
    // console.log(selector);

    if (selector === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (selector === 'about') {
      window.scrollTo({ top: winHeight, behavior: 'smooth' });
    } else if (selector === 'project') {
      window.scrollTo({ top: winHeight * 2, behavior: 'smooth' });
    } else if (selector === 'contact') {
      window.scrollTo({ top: winHeight * 3, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (scrollY >= 0 && scrollY < winHeight) { setMenuKey({ current: 'home' }) }
    else if (scrollY >= winHeight && scrollY < winHeight * 2) { setMenuKey({ current: 'about' }) }
    else if (scrollY >= winHeight * 2 && scrollY < winHeight * 3) { setMenuKey({ current: 'project' }) }
    else if (scrollY >= winHeight * 3) { setMenuKey({ current: 'contact' }) }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollY])

  return (
    <React.Fragment>
      <Row className='menuContainer'>
        <Col span={4}>
          <span className='menuLeftItem'>Kang Donghyeob</span>
        </Col>
        <Col span={8} offset={12}>
          <Menu onClick={handleClick} selectedKeys={[menuKey.current]} mode="horizontal">
            <Menu.Item key='home' onClick={clickEvent}>Home</Menu.Item>
            <Menu.Item key='about' onClick={clickEvent}>About</Menu.Item>
            <Menu.Item key='project' onClick={clickEvent}>Project</Menu.Item>
            <Menu.Item key='contact' onClick={clickEvent}>Contact</Menu.Item>
          </Menu>
        </Col>
      </Row>
      <Home />
      <About />
      <Project />
      <Contact />
    </React.Fragment>
  )
}

export default Layout;