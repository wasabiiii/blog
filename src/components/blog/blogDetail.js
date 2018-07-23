import React from 'react';
import { Link } from 'react-router-dom';
import request from 'util/request';
import Comment from 'components/comment/comment';
import moment from 'moment';
import Tag from 'components/tag/tag';

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
        const {match} = this.props;

        request.get('/api/blog/'+match.params.id,(resData) => {
            if(resData.status == 1){
                let {title,tag,time,content} = resData.data;
                time = moment(time.createAt).format('YYYY-MM-DD');
                this.setState({
                    title,
                    tag,
                    time,
                    content
                });
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

        return(
            <div className="container">   
                <div className="blog-panel">
                    <div className="blog-title">
                        <h1>{title}</h1>
                        <div>
                            <span className="time">{time}</span>
                            <Tag data={tag} tagclass="article-tag"/>
                        </div>
                    </div>
                    <div className="blog-content detail-content">
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>

                <Comment blogId={this.props.match.params.id}/>
            </div>



        );
    }
}

export default BlogDetail;