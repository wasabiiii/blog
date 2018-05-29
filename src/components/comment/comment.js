// import React from 'react';
// // import { withRouter } from 'react-router-dom';
// // require('././style.css');
// // import request from 'util/request';
// // import moment from 'moment';
// import { inject, observer } from 'mobx-react';
// import CommentAdd from './commentAdd';
// import CommentList from './commentList';

// @inject('commentStore')
// @observer
// class Comment extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         let {blogId} = this.props;
//         return(
//             <div>
//                 <CommentAdd blogId={blogId} />
//                 <CommentList blogId={blogId} />
//             </div>
//         );
//     }
// }

// export default Comment;

import React from 'react';
// import { withRouter } from 'react-router-dom';
// require('./style.css');
import request from 'util/request';
import moment from 'moment';
import DevTools from 'mobx-react-devtools';
import { inject, observer } from 'mobx-react';

@inject('commentStore')
@observer
class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state={
          inputComment:'',
          inputAuthor:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let {blogId} = this.props;
        this.props.commentStore.fetchGetComment(blogId);
    }

    handleInputChange(e){
        let inputValue  = e.target.value,
            inputName   = e.target.name;
        this.setState({
            [inputName] : inputValue
        });
    }

    handleSubmit(){
        let {inputAuthor,inputComment} = this.state;
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
            this.props.commentStore.fetchGetComment(blogId);
        }


    }

    


    render(){
        let {commentList} = this.props.commentStore;
        commentList = commentList.slice();

        console.log('render中的commentlsit：',commentList);
        let comment_list = commentList?
        commentList.map((item) => {
            return <CommentItem key={item._id} commentAuthor={item.author} comment={item.content} time={item.time} />;
        })
        :'';
        
        return(
            <div>
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

                <div>
                    {comment_list}
                </div>
                <DevTools />
            </div>
        );
    }
}

class CommentItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {commentAuthor,comment,time} = this.props;
        return(
            <div className="blog-panel comment-item">
                <div className="comment-author">
                    <span className="avatar">{commentAuthor.substr(0,1)}</span>
                    <div className="info">
                        <p className="name">{commentAuthor}</p>
                        <p className="comment-time">{moment(time).format('YYYY-MM-DD')}</p>
                    </div>

                </div>
                
                <div className="comment-content">
                    <p>{comment}</p>
                </div>
                
            </div>
        
        );
    }
}

export default Comment;