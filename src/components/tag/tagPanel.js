import React from 'react';
import request from 'util/request';
import { Link,withRouter } from 'react-router-dom';
import Tag from './tag';
@withRouter
class TagPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allTags:[]
        };
    }

    componentDidMount(){
        request.get('/api/blog/cates',(resData) => {
            if(resData.status == 1){
                this.setState({
                    allTags: resData.data,
                });
            }
        })
    }

    render(){
        return(
            <div className="blog-panel"> 
                <div className="blog-title">    
                    <h1>全部标签</h1>
                </div> 
                <div className="blog-content">  
                   
                    <Tag data={this.state.allTags} tagclass="all-tags"/>
                </div>       
            </div>
        )
    }
}

export default TagPanel;