import React from 'react';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import BlogItem from './blogItem'
require('./style.css');

class Cate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        };
    }

    componentDidMount(){
        $.ajax({
            url: '/api/blog/cate'+'/'+this.props.match.params.id,
            type: 'get',
            //async:false,
            success: (response)=>{
                //console.log(response);
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

    componentWillReceiveProps(nextProps){
        //.match.params.id ,location.pathname 区别？
        if (nextProps.match.params.id != this.props.match.params.id) {
            $.ajax({
                url: '/api/blog/cate'+'/'+nextProps.match.params.id,
                type: 'get',
                //async:false,
                success: (response)=>{
                    //console.log(response);
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
    }


    render(){
        let blog_items = this.state.data.map(function (item) {
            // const {_id,title,content,tag,time=} = item;
            return <BlogItem key={item._id} id={item._id} title={item.title} content={item.content} tag={item.tag} time={item.time.createAt} />;

        });

    /*    console.log(cate_blog);*/


        return(
            <div>
                {blog_items}
            </div>
        );
    }
}

export default Cate;