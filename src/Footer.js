import React from 'react';
// import {Link} from 'react-router-dom';


function Footer(props) {
  return (
    <>
      <footer>
        <div className='f_inner'>
          <div className='txt_box1'>
              <h2>고객행복센터</h2>
              <div>1644-1107<span>월~토요일 오전 7시 - 오후 6시</span></div>
          </div>
          <div className='txt_box2'>
            <ul>
              <li>컬리소개</li>
              <li>컬리소개영상</li>
              <li>인재채용</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>이용안내</li>
            </ul>
            <div>
              법인명(상호):주식회사 컬리 | 사업자등록번호 : 261-23567 <span className='color'>사업자정보 확인</span><br/>
              통신판매업: 제 2018-서울강남-01646호 | 개인정보보호책임자 : 이원준<br/>
              주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 : 김슬아 <br/>
              입점문의 :<span className='color'>입점문의하기</span> | 제휴문의 :<span className='color'>business@kurlycorp.com</span><br/>
              채용문의 : <span className='color'>business@kurlycorp.com</span><br/>
              팩스 : 070-7500-6098
            </div>
          </div>
        </div>
        <div className='address_wrap'>
        <address>
          copyright&copy;2022 Kully allrightes reserved
        </address>
        </div>
      </footer>
    </>
  );
}

export default Footer;