import React, { useEffect, useState } from 'react';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import 'antd/dist/antd.css';
import '../Css/header.css';
import '../Css/contents.css';

const Home = () => {
  const [aboutY, setAboutY] = useState('');
  const [skillsY, setSkillsY] = useState('');
  const [projectY, setProjectY] = useState('');
  const [careerY, setCareerY] = useState('');

  useEffect(() => {
    console.log(aboutY);
  }, [aboutY])

  return (
    <React.Fragment>
      <div>
        <Header aboutY={aboutY} skillsY={skillsY} projectY={projectY} careerY={careerY} />
        <Contents setAboutY={setAboutY} setSkillsY={setSkillsY} setProjectY={setProjectY} setCareerY={setCareerY} />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Home;