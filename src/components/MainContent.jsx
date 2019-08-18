import React, { Component } from 'react';

class MainContent extends Component {
  render()  {
    return (

      <div className="greeting-paragraph">

        I am currently in my first year of studying Computer Science at the
        University of Waterloo. I love building software and am especially
        interested in large scale system design and architecture. Feel free
        to take a look at my Linkedin profile, resume and some of my projects
        below.

        <img src={require('./images/personal-site-image.png')} />

      </div>

    )
  }
}

export default MainContent;
