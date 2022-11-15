import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
// import Product from './Product';
import Footer from './Footer';
import './css/Layout.css';
import NotFound from './NotFound';
import './css/App.css'
// import Login from './Login';


function App(props) {
  
  return (
    <>
    {/* url 주소를 감지하기 위해 browerRouter로 감싸줌 */}
    <BrowserRouter>
      <Header />
      {/* 여러 콤포넌트를 Router로 감싸서 규칙이 일치하는 것만 렌더링함 */}
        <Routes>
          {/* Rouder : path속성에 경로, element속성에 콤포넌트를 삽입, 여러 라우팅을 매치하고자 할 때 url뒤에 *를 사용한다. */}
          <Route path="/" element={<Main/>}></Route>
          {/* <Route path="product/*" element={<Product/>}></Route> */}
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        {/* <Route path='/Login/*' element={<Login />}>
        </Route> */}
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;