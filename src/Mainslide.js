import React, { Component } from 'react';
import Main from './Main';

class Mainslide extends Component {
  render() {
    return (
      <>
        <main>
          <article>
            <img src={process.env.PUBLIC_URL + '/images/slide01.jpg'} width = '1920px'/>
          </article>
        </main>
        
      </>
    );
  }
}

export default Mainslide;