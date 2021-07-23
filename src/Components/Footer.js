import React from 'react';
import '../Css/footer.css';
import { GithubOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <React.Fragment>
      <div className='footerWrap'>
        <div className='footerBox'>
          <div className='footerBoxItem'>
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