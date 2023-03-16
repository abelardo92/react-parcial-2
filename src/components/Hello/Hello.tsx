// import Test from './components/Test.tsx';
import './Hello.css';
import React, { useEffect } from 'react';

interface HelloComponent {
  text: string,
  setText?: Function,
}

function Hello({text, setText} : HelloComponent) {

  useEffect(() => {
    setTimeout(() => setText && setText("loaded2"), 6000);
  },[setText]);

  return (
    <div className="HelloContainer">
      <div className="TextContainer">
        {text}
      </div>
    </div>
  );
}

export default Hello;