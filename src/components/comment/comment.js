import React from 'react';
import CommentAdd from './commentAdd';
import CommentList from './commentList';

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {blogId} = this.props;
        return(
            <div>
                <CommentAdd blogId={blogId} />
                <CommentList blogId={blogId} />
            </div>
        );
    }
}

export default Comment;