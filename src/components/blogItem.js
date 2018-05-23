import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link }    from 'react-router-dom';
import moment from 'moment';
require('./style.css');

class BlogItem extends React.Component{
    render(){
        let {id,title,content,tag,time} = this.props;
        // console.log(typeof tag)
        // console.log(tag)
        // tag = tag.split(',');
        let tag_list = tag.map(function (item,index) {
            // const {_id,title,content,tag,time=} = item;
            console.log(item)
            const link = `/cate/${item}`;
            return <span key={index} ><Link to={link}>{item}</Link></span>;

        });
        return(
            <div className="container blog-panel">
                <div className="blog-item">
                    <div className="col-md-9 ">
                        <Link to={"/blog/"+id}>
                            <h1>{title}</h1>
                        </Link>
                        <p className="abstract">
                            {content.replace(/<[^>]+>/g,"")}
                        </p>
                        <div>
                            <i className="fa fa-tags fa-lg"></i>
                            {tag_list}
                        </div>


                    </div>
                    <div className="col-md-3 blog-item-time">
                        {moment(time).format('YYYY-MM-DD')}
                    </div>
                </div>
            </div>
        )
    }

}

export default BlogItem;