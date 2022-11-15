import React from 'react';
// import {Link} from 'react-router-dom';
import List from './List';
import MainSlide from './MainSlide';
const product = [
    {id:'1', product:'/image/img.jpeg', title:'[하림]삼계탕 900g(2개입)',price:'21,900원',heart:'♥'},
    {id:'2', product:'/image/img2.jpg', title:'[탕육]함박스테이크',price:'7,900원',heart:'♥'},
    {id:'3', product:'/image/img3.jpg', title:'[네니아]유기농 초코 아이스크림 4개입',price:'11,900원',heart:'♥'},
    {id:'4', product:'/image/img4.jpg', title:'[외할머니댁]고기짬뽕',price:'5,500원',heart:'♥'}
  ];

const pList = product.map(
  (v)=>(<List key={v.id} image={v.product} name={v.title} price={v.price} heart={v.heart}/>
  ))
  
function Product(props) {
  return (
    <>
      <MainSlide/>
      <div className='product'>
        <h2>이 상품 어때요?</h2>
        <ul className='product_list'>
          {pList}
        </ul>
      </div>
    </>
  );
}

export default Product;