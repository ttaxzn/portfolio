import name from './svgs/name1.svg';
import sub from './svgs/subtitle1.svg';
import me from './svgs/result.svg';
import bestbuy from './svgs/bestbuy1.svg';
import walmart from './svgs/walmart1.svg';
import github from './svgs/git.svg';
import linkedin from './svgs/in.svg';
import insta from './svgs/insta.svg';
import barcode from './pngs/Code-128.PNG';
import heart from './pngs/spray-paint.png';


import React from 'react';
import './App.css';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">

      {/* THIS IS THE NAME PORTION*/}
      <header className="App-header">
      <img src={name} className="name"/>
      <img src={sub} className="sub"/>
      </header>


      {/* THIS IS THE WORK PORTION*/}

      <div className='aboutContainer'>
      <div class="about">WORK</div>
      </div>
<FadeInSection>
      <div class="timeline">
  <div class="container left">
    <div class="content">
    <img src={bestbuy} class="content1"/>
    <p class="imagetext">associate software engineer intern</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
    <img src={walmart} class="content1"/>
      <p class="imagetext">software engineer 3 intern</p>
    </div>
  </div>
</div>
</FadeInSection>



      {/* THIS IS THE CONTACT PORTION*/}

<div className='aboutContainer'>
      <div class="about">
        <div class="hover-underline-animation">
        SAY HI!
        </div>
        </div>
      </div>
<FadeInSection>
      <div className="cardContainer">
      <div className="card">
        <div class="textContainer">
      <div class="text2">
      <a href = "mailto: teona.abus@gmail.com" className='email'>
        teona.abus@gmail.com
        </a>
      </div>
      

      <div class="text3">
Kansas city, Missouri
      </div>
      
  
  <div class="iconContainer"> 
  <a href="https://www.linkedin.com/in/tea-abuselidze-42aa2a1a9/" className='icons'>
  <img src={linkedin} className="icons"/>
  </a>
  <a href="https://www.instagram.com/fxckteaa/" className='icons'>
  <img src={insta} className="icons"/>
  </a>
<a href="https://github.com/ttaxzn" className='icons'>
  <img src={github} className="icons"/>
  </a>
  </div>
  </div>
      <img src={me} className="img"/>
      </div>
      </div>
      </FadeInSection>
<img src={barcode} className="barcode"/>







<div>
  <br></br>
</div>
      
    </div>
    
  );
}
export default App;
