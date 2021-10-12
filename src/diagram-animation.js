import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './images/diagram_after/data.json';

class Diagramanimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
        />
      </div>
    );
  }
}

export default Diagramanimation;