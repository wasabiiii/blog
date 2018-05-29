import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
class Pagination extends React.Component {

  constructor(props){
      super(props);
  }

  renderPaginations = () => {
    let result = []
    for(let i = 1; i <= this.props.allPageCount; i++) {
      result.push((
        <li key={i}>
          <a className={this.props.activeIndex === i ? "active" : ""}
            
            onClick={() => this.props.setIndex(i)}
          >
            {i}
          </a>
        </li>
      ))
    }
    return result
  }

  toSetIndex(direction){
    const {activeIndex,allPageCount} = this.props;
    console.log('activeIndex',activeIndex)
    console.log('allPageCount',allPageCount)
    switch (direction) {
      case "pre":
        this.props.setIndex(activeIndex - 1 > 0 ? activeIndex - 1 : activeIndex)

        break
      case "next":
        this.props.setIndex(activeIndex + 1 > allPageCount ? activeIndex : activeIndex + 1)
        break
      default:
        break
    }
  }


  render() {

    
    return (


      <ul className="pagination">
          <li><a onClick={()=>this.toSetIndex("pre")}>&laquo;</a></li>
          {/*<li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>*/}
          {this.renderPaginations()}
          <li><a onClick={()=>this.toSetIndex("next")}>&raquo;</a></li>
      </ul>


    )
  }
}

export default Pagination