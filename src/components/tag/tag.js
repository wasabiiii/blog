import React from 'react';
import BlogItem from 'components/blog/blogItem';
import TagList from './tagList';
import request from 'util/request';
import { Link } from 'react-router-dom';
// require('./style.css');

class Tag extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        };
    }

    componentDidMount(){
        console.log('this.props tag',this.props);
        request.get('/api/blog/cate'+'/'+this.props.match.params.id,(resData) => {
            if(resData.status == 1){
                this.setState({
                    data: resData.data,
                });
            }
        })
    }

    componentWillReceiveProps(nextProps){ 
        if (nextProps.match.params.id != this.props.match.params.id) {
            request.get('/api/blog/cate'+'/'+nextProps.match.params.id,(resData) => {
                if(resData.status == 1){
                    this.setState({
                        data: resData.data
                    });
                }
            })
        } 
    }


    render(){
        let blog_items = this.state.data.map(function (item) {
            return <BlogItem key={item._id} id={item._id} title={item.title} content={item.content} tag={item.tag} time={item.time.createAt} />;

        });

        return(
            <div className="container">
                <div className="col-md-9">
                    {blog_items}
                </div>
                <div className="col-md-3">
                    <TagList />
                </div>
            </div>

        );
    }
}



export default Tag;