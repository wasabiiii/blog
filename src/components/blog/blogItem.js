import React from 'react';
import { Link }    from 'react-router-dom';
import moment from 'moment';
import Tag from 'components/tag/tag';

const BlogItem = ({id,title,content,tag,time}) =>{
    content = content.replace(/[#`*>]*/g,"");//去除markdown语法

    return(
        <div className="blog-panel">
            <div className="blog-item">
                <div>
                    <Link to={"/blog/"+id}>
                        <h1>{title}</h1>
                    </Link>
                    <p className="abstract">
                        {content.length > 60 ? content.slice(0, 60) + "..." : content}
                    </p>
                    <div>
                        <span>
                            <i className="fa fa-tags fa-lg"></i>
                            
                            <Tag data={tag} tagclass="article-tag"/>
                        </span>
                        <span className="blog-item-time">
                            {moment(time).format('YYYY-MM-DD')}
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BlogItem;