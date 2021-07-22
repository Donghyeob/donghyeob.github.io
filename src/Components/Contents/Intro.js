import React from 'react';

const introArea = { height: window.innerHeight - 110, zIndex: '15', marginTop: '50px' }

const Intro = () => {
  const onClickIntro = () => {
    window.scrollTo({ top: window.innerHeight - 72, left: 0, behavior: 'smooth' });
  }

  return (
    <React.Fragment>
      <div style={introArea}>
        <div className='containerItem'>
          <p className='introText'>
            <span>Kang Donghyeob</span><br />
            <span>Front-end Developer Portfolio</span>
          </p>
          <hr className='introTail' />
        </div>
        <div className='containerItem'>
          <p className='introSubText'>
            <span>안녕하세요.</span><br />
            <span>깔끔한 성격을 가지고있는 프론트 엔드 개발자입니다.</span><br />
            <span>코드를 간결하게 작성하기를 지향하며, 주변에게도 전달되는 프론트 엔드에 대한 열정이 저의 장점입니다.</span>
          </p>
        </div>
        <div className='containerItem'>
          <div className='introButton' onClick={onClickIntro}>더 알아보기</div>
        </div>
      </div>
    </React.Fragment >
  )
}

export default Intro;