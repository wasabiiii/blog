import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="content div-center">
            <a target="_blank"  rel='noopener noreferrer' href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-stack-1x fa-inverse">知</i>
              </span>
            </a>
            <a target="_blank"  rel='noopener noreferrer' href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x gray-icon"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <p className="text-muted mt-1">
              Copyright © lulu的博客 2018
              <br />
                  Writen by <a target="_blank"  rel='noopener noreferrer' href="#">Lulu</a> | 
              <iframe title="git-star" id="iframe"
                frameBorder="0" scrolling="0" width="80px" height="20px"
                src="#" >
              </iframe>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer