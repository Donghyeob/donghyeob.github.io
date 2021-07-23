import React, { useEffect, useState } from 'react';

const Header = ({ aboutY, skillsY, projectY, careerY }) => {
  const [scrollY, setScrollY] = useState();

  const menuBarEvent = () => {
    setScrollY(window.pageYOffset);
  }
  const onClickMenu = e => {
    const menu = e.target.getAttribute('value');
    menu === 'home' ? window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      : menu === 'about' ? window.scrollTo({ top: aboutY - 72, left: 0, behavior: 'smooth' })
        : menu === 'skills' ? window.scrollTo({ top: skillsY - 72, left: 0, behavior: 'smooth' })
          : menu === 'project' ? window.scrollTo({ top: projectY - 72, left: 0, behavior: 'smooth' })
            : window.scrollTo({ top: 30000, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', menuBarEvent);
    return () => {
      window.removeEventListener('scroll', menuBarEvent);
    }
  }, [scrollY])

  return (
    <React.Fragment>
      <div className={scrollY < 10 ? 'headerContainer' : 'headerContainer headerContainerDown'}>
        <div className='headerWrap'>
          <div className='logo' onClick={onClickMenu} value={'home'}><span>Kang Donghyeob</span></div>
          <div className='menuList'>
            <div onClick={onClickMenu} value={'about'}>About</div>
            <div onClick={onClickMenu} value={'skills'}>Skills</div>
            <div onClick={onClickMenu} value={'project'}>Project</div>
            <div onClick={onClickMenu} value={'career'}>Career</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;