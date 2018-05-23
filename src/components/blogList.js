import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import moment from 'moment';
import BlogItem from './blogItem';
require('./style.css');

class BlogList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        $.ajax({
            url: '/api/blog',
            type: 'get',
            //async:false,
            success: (response)=>{
                console.log(response);
                if(response.status == 1){
                    this.setState({
                        data: response.data,
                        // content: response.data.content
                    });
                    //$('.text1').html(this.state.text);
                }
            }
        })
    }

    render(){

        let blog_items = this.state.data.map(function (item) {
            // const {_id,title,content,tag,time=} = item;
            return <BlogItem key={item._id} id={item._id} title={item.title} content={item.content} tag={item.tag} time={item.time.createAt} />;

        });

        return(
            <div>
                {blog_items}
            </div>
        );
    }
}
export default BlogList;


