import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="projects-content">
        <h3><a
            href="https://chrome.google.com/webstore/detail/lehigh-professor-rating/mipngmbcgaaflimgenhnplphekhboidc"
          >
          Lehigh Professor Rating</a></h3>
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
