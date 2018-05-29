import React from 'react';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import BlogItem from './blogItem';
import 'whatwg-fetch';
import { Link }    from 'react-router-dom';
require('./style.css');

class Cate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            allCates:[]
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
        });
        fetch('/api/blog/cates',{credentials: 'include'})
            .then((response) => response.json())
            .then((resData) => {
                    console.log(resData);
                    if(resData.status == 1){
                        this.setState({
                            allCates: resData.data,
                        });
                    }
                })
            .catch((err) => {
                console.log(err);
            })
    }

    componentWillReceiveProps(nextProps){ 
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

        // let cate_list = this.state.allCates.map(function (item) {
        //     // const {_id,title,content,tag,time=} = item;
        //     console.log(item);
        //     //return <Button key={item._id} id={item._id} tag={item.tag}/>;
        //     return <Button key={item}>{item}</Button>

        // });

        let tag_list = this.state.allCates.map(function (item,index) {
            // const {_id,title,content,tag,time=} = item;
            console.log(item)
            const link = `/cate/${item}`;
            return <button className="btn btn-xs btn-default tag" key={index} ><Link to={link}>{item}</Link></button>;

        });

    /*    console.log(cate_blog);*/


        return(
            <div className="container">
                <div className="col-md-9">
                    {blog_items}
                </div>
                <div className="col-md-3">
                    <div className="blog-panel"> 
                        <div className="blog-title">    
                            <h1>全部标签</h1>
                        </div> 
                        <div className="blog-content">  
                            {tag_list}
                        </div>       
                    </div>
                    
                </div>
            </div>

        );
    }
}

export default Cate;