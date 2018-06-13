import React from 'react';
import { Link }    from 'react-router-dom';
import moment from 'moment';
// require('./style.css');

class BlogItem extends React.Component{
    render(){
        let {id,title,content,tag,time} = this.props;
        content = content.replace(/<[^>]+>/g,"");//去除html标签

        let tag_list = tag.map(function (item,index) {
            const link = `/tag/${item}`;
            return <button className="btn btn-xs btn-default tag" key={index} ><Link to={link}>{item}</Link></button>;

        });
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
                                {tag_list}
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

}

export default BlogItem;