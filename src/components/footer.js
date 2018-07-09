import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="div-center">
{/*            <a target="_blank"href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-stack-1x fa-inverse">知</i>
              </span>
            </a>
            <a target="_blank" href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x gray-icon"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>*/}
            <p className="copyright">
              Copyright © 2018 <a href="https://www.lulu-mao.cn">lulu的博客</a>
              <br />
                  Writen by <a target="_blank" href="https://www.lulu-mao.cn">Lulu</a> | 
              <iframe title="git-star" id="iframe"
                frameBorder="0" scrolling="0" width="80px" height="20px"
                src="https://ghbtns.com/github-btn.html?user=wasabiiii&repo=blog&type=star&count=true" >
              </iframe>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;