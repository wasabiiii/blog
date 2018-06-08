import React from 'react';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import request from 'util/request';
import Comment from 'components/comment/comment';
import moment from 'moment';
// require('./style.css');

class BlogDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
          title:'',
          tag:[],
          time:'',
          content:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
        console.log('this.props',this.props);
        const {match} = this.props;

        request.get('/api/blog/'+match.params.id,(resData) => {
            if(resData.status == 1){
                let {title,tag,content} = resData.data;
                let time = moment(time).format('YYYY-MM-DD');
                this.setState({
                    title,
                    tag,
                    time,
                    content
                });
                console.log(this.state.content);
                $('.detail-content').html(this.state.content);
            }
        })
    }

    handleInputChange(e){
        let inputValue  = e.target.value,
            inputName   = e.target.name;
        this.setState({
            [inputName] : inputValue
        });
    }

    render(){
        let {title,tag,time,content} = this.state;
        let tag_list = tag.map(function (item,index) {
            const link = `/tag/${item}`;
            return <button className="btn btn-xs btn-default tag" key={index} ><Link to={link}>{item}</Link></button>;
        });

        return(
            <div className="container">   
                <div className="blog-panel">
                    <div className="blog-title">
                        <h1>{title}</h1>
                    </div>
                    <div className="blog-content detail-content">
                        <div>
                            {tag_list}
                            {time}
                        </div>
                            {content}
                    </div>
                </div>

                <Comment blogId={this.props.match.params.id}/>
            </div>



        );
    }
}

export default BlogDetail;