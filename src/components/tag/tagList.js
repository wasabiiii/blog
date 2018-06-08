import React from 'react';
import request from 'util/request';
import { Link,withRouter }    from 'react-router-dom';
// require('./style.css');
// 
@withRouter
class TagList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allTags:[]
        };
    }

    componentDidMount(){
        console.log('this.props tag_list',this.props);
        request.get('/api/blog/cates',(resData) => {
            if(resData.status == 1){
                this.setState({
                    allTags: resData.data,
                });
            }
        })
    }

    render(){

        let tag_list = this.state.allTags.map(function (item,index) {
            console.log(item)
            const link = `/tag/${item}`;
            return <button className="btn btn-xs btn-default tags" key={index} ><Link to={link}>{item}</Link></button>;
        });

        return(
            <div className="blog-panel"> 
                <div className="blog-title">    
                    <h1>全部标签</h1>
                </div> 
                <div className="blog-content">  
                    {tag_list}
                </div>       
            </div>
        )
    }
}

export default TagList;