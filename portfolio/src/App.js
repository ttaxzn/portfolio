import name from './svgs/name1.svg';
import sub from './svgs/subtitle1.svg';
import me from './svgs/result.svg';
import bestbuy from './svgs/bestbuy1.svg';
import walmart from './svgs/walmart1.svg';
import github from './svgs/git.svg';
import linkedin from './svgs/in.svg';
import insta from './svgs/insta.svg';
import barcode from './pngs/Code-128.PNG';
import mockup from './svgs/mockup.svg';

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


<nav>
  <a href="#home">Home</a>
  <a href="#work">work</a>
  <a href="#contact">contact</a>
</nav>

      {/* THIS IS THE NAME PORTION*/}
      <header className="App-header">
      <img src={name} className="name" id="home"/>
      <img src={sub} className="sub"/>

      </header>


      {/* THIS IS THE WORK PORTION*/}

      <div className='aboutContainer'>
      <div class="about">WORK</div>
      </div>

<FadeInSection>
    <div className='workContainer' id="work">
      <div className='worktextContainer'>
        <div className='align'>
        <div className='title'>
          WALMART global tech
        </div>
        <div className='jobtitle'>
          software engineer 3 / front end developer
        </div>
        </div>
        <button class="glow-on-hover" type="button">
          <a href="https://www.figma.com/file/3XIlmJnS7DI4561jQVrPOp/Lumos---Dev?node-id=3921%3A486358&t=l2hcise9T9Hvm97o-0" className='link'>
          SEE PROJECT
          </a>
          </button>
      </div>
      <img src={mockup} className="mockup"/>
      </div>
      </FadeInSection>  
     



      {/* THIS IS THE CONTACT PORTION*/}

<div className='aboutContainer'>
      <div class="about">
        <div class="hover-underline-animation" id="contact">
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
