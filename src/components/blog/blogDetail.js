import React from 'react';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import request from 'util/request';
import Comment from 'components/comment/comment';
// require('./style.css');

class BlogDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
          title:'',
          content:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
        console.log('this.props',this.props);
        const {match} = this.props;

        request.get('/api/blog/'+match.params.id,(resData) => {
            if(resData.status == 1){
                this.setState({
                    title: resData.data.title,
                    content: resData.data.content
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
        return(
            <div className="container">   
                <div className="blog-panel">
                    <div className="blog-title">
                        <h1>{this.state.title}</h1>
                    </div>
                    <div className="blog-content detail-content">
                        {this.state.content}
                    </div>
                </div>

                <Comment blogId={this.props.match.params.id}/>
            </div>



        );
    }
}

export default BlogDetail;