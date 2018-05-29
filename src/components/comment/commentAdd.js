import React from 'react';
// import { withRouter } from 'react-router-dom';
// require('./style.css');
import request from 'util/request';
import { inject, observer } from 'mobx-react';

@inject('commentStore')
@observer
class CommentAdd extends React.Component{
    constructor(props){
        super(props);
        this.state={
          inputComment:'',
          inputAuthor:'',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        let inputValue  = e.target.value,
            inputName   = e.target.name;
        this.setState({
            [inputName] : inputValue
        });
    }

    handleSubmit(){
        let {inputComment,inputAuthor} = this.state;
        let {blogId} = this.props;

        if(!inputAuthor){
            alert('请输入您的昵称');
        }else if(!inputComment){
            alert('评论还是空白哦，输入评论再提交~')
        }else{
            let body = {
                blogId:blogId,
                content:inputComment,
                author:inputAuthor
            };

            this.props.commentStore.fetchAddComment(body);
            //this.props.commentStore.fetchGetComment(blogId);
        }


    }

    render(){     
        return(
            <div className="blog-panel" style={{marginTop:15}}>
                <div className="blog-title">
                    <h1>发表评论</h1>
                </div>
               <div className="blog-content">
                    昵称：<input className="form-control author-input" type="text" name="inputAuthor" value={this.state.inputAuthor} onChange={this.handleInputChange} />
                    评论：<textarea className="form-control" name="inputComment" cols="30" rows="4" placeholder="有什么想说的都可以写在这里~" value={this.state.inputComment} onChange={this.handleInputChange} />
                    <button className="btn btn-default btn-s btn-submit" onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        );
    }
}
export default CommentAdd;