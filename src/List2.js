import React from 'react';

function List(props) {

  return (
    <>
      <section className='best'>
        <h3>놓치면 후회할 가격</h3>
        <ul>
        {/* <li> */}
            {/* <img src={`${process.env.PUBLIC_URL}/images/${props.img}`} alt="" />
            <p>{props.name}</p>
            <p>{props.price}</p> */}
        {/* </li> */}
            <li>
                <img src={process.env.PUBLIC_URL + '/images/con_1.jpg'} width = '249px'/>
                <p className='main'>[전시회]알버트 왓슨 사진전</p>
                <p className='price'>9,500원</p>
                </li>
            <li>
                <img src={process.env.PUBLIC_URL + '/images/con_2.jpg'} width = '249px'/>
                <p className='main'>[남도우애]무항생제 한우 채끝 1++</p>
                <p className='price'>31,920원</p>
                </li>
            <li>
                <img src={process.env.PUBLIC_URL + '/images/con_3.jpg'} width = '249px'/>
                <p className='main'>[면사랑]춘천식 비빔막국수(2개입)</p>
                <p className='price'>8,925원</p>
                </li>
            <li>
                <img src={process.env.PUBLIC_URL + '/images/con_4.jpg'} width = '249px'/>
                <p className='main'>[마이비밀]다이어트 도시락[5종](2개입)</p><p className='price'>21,900원</p>
                </li>
        </ul>
      </section>
    </>
  );
}

export default List;