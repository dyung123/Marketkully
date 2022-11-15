import React from 'react';
import {Link} from 'react-router-dom';

function NotFound(props) {
  return (
    <>
      <div className='notfound'>
      <p>
        찾으시는 페이지가 없습니다.
        <span>NotFound 404 error.</span>
      </p> 
      <p>
        <Link to="/">
          <input type='button' value={"돌아가기"}></input>
        </Link>
      </p>
      </div>
    </>
  );
}


export default NotFound;