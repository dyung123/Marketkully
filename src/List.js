import React from 'react';

function List(props) {

  return (
    <>
      <section className='best'>
        <h3>이 상품 어때요?</h3>
        <ul>
        {/* <li> */}
            {/* <img src={`${process.env.PUBLIC_URL}/images/${props.img}`} alt="" />
            <p>{props.name}</p>
            <p>{props.price}</p> */}
        {/* </li> */}
            <li>
              <img src={process.env.PUBLIC_URL + '/images/product01.jpg'} width = '249px'/>
              <p className='main'>[하림]삼계탕 900g(2개입)</p>
              <p className='price'>21,900원</p>
              </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/product02.jpg'} width = '249px' alt='이미지2' />
              <p className='main'>[탕육]함박스테이크</p>
              <p className='price'>7,900원</p>
              </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/product03.jpg'} width = '249px'/>
              <p className='main'>[네니아]유기농 초코 아이스크림<br /> 4개입</p>
              <p className='price'>11,900원</p>
              </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/product04.jpg'} width = '249px'/>
              <p className='main'>[외할머니댁]고기짬뽕</p>
              <p className='price'>5,500원</p>
              </li>
        </ul>
      </section>
    </>
  );
}

export default List;