import React from 'react';
import CommentAdd from './commentAdd';
import CommentList from './commentList';

const Comment = ({blogId})=>(
        <div>
            <CommentAdd blogId={blogId} />
            <CommentList blogId={blogId} />
        </div>
    );

export default Comment;