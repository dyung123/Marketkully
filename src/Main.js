import React from 'react';
import Mainslide from './Mainslide';
import List from './List';
import List2 from './List2';

const Main = (props) => {
	return (
		<>
         <Mainslide />
         <List />
         <div className='m_banner'>
         <img src={process.env.PUBLIC_URL + '/images/m_banner.jpg'} />
         </div>
         <List2 />
		</>
	);
};

export default Main;