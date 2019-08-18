import React, { Component } from 'react';

class MainContent extends Component {
  render()  {
    return (

      <div className="link-icons">
        <a href="https://www.linkedin.com/in/justin-kwan-75a416137/" target="_blank">
          <img className="linkedin-icon" src={require('./images/linkedin.png')} />
        </a>

        <a href="https://github.com/Justin-Kwan" target="_blank">
          <img className="github-icon" src={require('./images/github.png')} />
        </a>

        <a href="https://drive.google.com/file/d/1R4NG1xmPy8CgnLtMSdpk21PNiXoZY3yq/view?usp=sharing" target="_blank">
          <img className="resume-icon" src={require('./images/adobeacrobatreader.png')} />
        </a>
      </div>

    )
  }
}

export default MainContent;
