import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="projects-content">
        <a href="http://cobyacademy.com"><h3>
          Coby Academy
        </h3>
      <img class="projects-image" src="/img/cobyscreen.png" /></a>
      <p>
        This is a side I made deticated to teaching people how to better themselves.
      </p>
      <p>
        I made the site on my own using Jekyll and Bootstrap.  I wanted to design the entire
        layout without using templates.  This proved to be an interesting challange because
        I eventually had to come up with
        my own ways of displaying pictures and rendering the contents menu using some basic jQuery.
        To see my work, check out
        the <a href="https://github.com/jloughran/CobyAcademy">GitHub page for Coby Acadamy</a>.
      </p>
        <a
            href="https://chrome.google.com/webstore/detail/lehigh-professor-rating/mipngmbcgaaflimgenhnplphekhboidc"
          >
          <h3>Lehigh Professor Rating</h3>
        <img class="projects-image" src="/img/profratingscreen.png" />
        </a>
        <p>
          This is a chrome extension that injects ratings from <a href="http://www.ratemyprofessors.com">
          ratemyprofessors.com</a> into the course selection page for <a href="http://www.lehigh.edu">
          Lehigh University</a>.
        </p>
        <p>
          I started out using <a href="https://github.com/cbarbello/RateMyGold">cbarbello's extension for UCSB
          </a>, but ended up pretty much completely rewriting it.  It's mostly just plain JavaScript with a bit of
          jQuery.
        </p>
      </div>
    );
  }
}
