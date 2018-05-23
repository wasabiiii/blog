import React from 'react';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
require('./style.css');

class BlogDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
          title:'标题',
          content:'内容'
        };
    }

    componentDidMount(){
        $.ajax({
            url:'/api/blog/'+this.props.match.params.id,
            type:'get',
            success: (response)=>{
            console.log(response);
            if(response.status == 1){
                this.setState({
                    title: response.data.title,
                    content: response.data.content
                });
                console.log(this.state.content);
                $('.blog-content').html(this.state.content);
            }
        }
        })
    }

    render(){
        return(
            <div className="container blog-panel">
                <div className="blog-title">
                    <h1>{this.state.title}</h1>
                </div>
                <div className="blog-content">
                    {this.state.content}
                </div>
            </div>

        );
    }
}

export default BlogDetail;