import React from 'react';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { inject, observer } from 'mobx-react';
import BlogItem from './blogItem';
import Pagination from 'util/pagination/index.js'
require('./style.css');

@inject('blogStore')
@observer
class BlogList extends React.Component{
    constructor(props){
        super(props);
        this.setPaginationIndex = this.setPaginationIndex.bind(this);
    }

    componentDidMount(){
        this.props.blogStore.fetchPageBlog();
        this.props.blogStore.loadPageBlog();
    }

    setPaginationIndex(index){
        this.props.blogStore.setPaginationIndex(index);
    }

    render(){

        let {blogStore} = this.props;
        let pageBlog = blogStore.pageBlog.slice();

        let blog_items = pageBlog.map(function (item) {
            // const {_id,title,content,tag,time=} = item;
            return <BlogItem key={item._id} id={item._id} title={item.title} content={item.content} tag={item.tag} time={item.time.createAt} />;

        });

        return(
            <div>
                {blog_items}
                {/*<Link to='/blog'>点击查看更多</Link>*/}
                <Pagination
                  allPageCount={blogStore.allPageCount}
                  activeIndex={blogStore.pageActiveIndex}
                  setIndex={this.setPaginationIndex}
                />
            </div>
        );
    }
}
export default BlogList;


