import React from 'react';
import request from 'util/request';
import moment from 'moment';
import { inject, observer } from 'mobx-react';

@inject('commentStore')
@observer
class CommentList extends React.Component{
    componentDidMount(){
        let {blogId} = this.props;
        this.props.commentStore.fetchGetComment(blogId);
    }

    render(){
        let {commentList} = this.props.commentStore;
        commentList = commentList.slice();

        let comment_list = commentList?
        commentList.map((item) => {
            return <CommentItem key={item._id} commentAuthor={item.author} comment={item.content} time={item.time} />;
        })
        :'';
        
        return(
            <div>
                {comment_list}
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

export default CommentList;