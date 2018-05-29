import React from 'react';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import Comment from './comment/comment';
require('./style.css');

class BlogDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
          title:'标题',
          content:'内容',
          addComment:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
        const {match} = this.props;
        $.ajax({
            url:'/api/blog/'+match.params.id,
            type:'get',
            success: (response)=>{
            console.log(response);
            if(response.status == 1){
                this.setState({
                    title: response.data.title,
                    content: response.data.content
                });
                console.log(this.state.content);
                $('.detail-content').html(this.state.content);
            }
        }
        })
    }

    handleInputChange(e){
        let inputValue  = e.target.value,
            inputName   = e.target.name;
        this.setState({
            [inputName] : inputValue
        });
    }

    render(){
        return(
            <div className="container">   
                <div className="blog-panel">
                    <div className="blog-title">
                        <h1>{this.state.title}</h1>
                    </div>
                    <div className="blog-content detail-content">
                        {this.state.content}
                    </div>
                </div>


{/*                <div className="blog-panel" style={{marginTop:15}}>
                    <div className="blog-title">
                        <h1>发表评论</h1>
                    </div>
                   <div className="blog-content">
                        <textarea className="form-control" name="addComment" cols="30" rows="4" value={this.state.addComment}onChange={this.handleInputChange} />
                        <button className="btn btn-default btn-s btn-submit">发布</button>
                    </div>

                </div>*/}
                <Comment blogId={this.props.match.params.id}/>
            </div>



        );
    }
}

export default BlogDetail;