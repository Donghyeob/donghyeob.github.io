import React from 'react';
import '../Css/footer.css';
import { Modal } from 'antd';
import { MailOutlined, GithubOutlined } from '@ant-design/icons';

const Footer = () => {
  const countDown = () => {
    let secondsToGo = 2;
    const modal = Modal.success({
      title: '클립보드에 복사되었습니다.',
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }

  const copy = () => {
    document.execCommand("copy");
    const textarea = document.createElement("textarea");
    textarea.value = 'donghyeob.k@gmail.com';
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.display = "fixed";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    countDown();
  }

  return (
    <React.Fragment>
      <div className='footerWrap'>
        <div className='footerBox'>
          <div className='footerBoxItem'>
            <span onClick={copy}>
              <MailOutlined />
            </span>
            <a href='https://github.com/Donghyeob' target='blank'>
              <GithubOutlined />
            </a>
          </div>
          <div className='footerCopyRight'>
            <span>&copy;2021. Kang Donghyeob. All rights reserved.</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer;