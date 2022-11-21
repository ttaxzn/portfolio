import name from './svgs/name1.svg';
import sub from './svgs/subtitle1.svg';
import about from './svgs/about.svg';
import me from './svgs/result.svg';
import abouttext from './svgs/abouttext3.svg';
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
      <header className="App-header">
      <img src={name} className="name"/>
      <img src={sub} className="sub"/>
      </header>
      <div className='aboutContainer'>
      <div class="about">ABOUT</div>
      </div>
      <FadeInSection>
      <div className="cardContainer">
      <div className="card">
        <div class="textContainer">
      <div class="text1">
        Hey I'm Tea!
      </div>
      <div class="text1">
 i was born and raised in Kansas city, Missouri
      </div>
      
      <div class="text1">
      I MAINLY DO WEB DESIGN, WEB DEVELOPMENT & BRANDING BUT FROM TIME TO TIME I ALSO DO GRAPHIC DESIGN, ILLUSTRATION, AND PRETTY MUCH ANYTHING ELSE
      </div>
      </div>
      <img src={me} className="img"/>
      </div>
      </div>
      </FadeInSection>

      <div className='aboutContainer'>
      <div class="about">WORK</div>
      </div>










      
    </div>
    
  );
}
export default App;
