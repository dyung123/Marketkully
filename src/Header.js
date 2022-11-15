import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function Header(props) {
  return (
    <>
      <header>
        <div className='header_inner'>
          <h1>
           <Link to="/"><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt=''/></Link>
          </h1>
          <input type="text" placeholder = "검색어를 입력해주세요"></input>
          <ul className='lnb'>
          <p className='login_link'><Link to='/login/*'>회원가입</Link>|<Link to='/login/*'>로그인</Link>|<Link to='/login/*'>고객센터</Link></p>
          </ul>

          <ul className='gnb'>
            <li>신상품</li>
            <li>베스트</li>
            <li>알뜰쇼핑</li>
            <li>특가/혜택</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;