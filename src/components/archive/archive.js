import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { inject, observer } from 'mobx-react';
import TagPanel from 'components/tag/tagPanel';

@inject('blogStore')
@observer
class Archive extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.blogStore.fetchPageBlog();
    }

    render(){

        let {blogStore} = this.props;
        let allBlog = blogStore.allBlog.slice();

        let archiveList = allBlog.map(function (item) {
            return <ArchiveItem key={item._id} id={item._id} title={item.title} time={item.time.createAt} />;
        });

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-9 blog-panel">
                        {archiveList}
                    </div>
                    <div className="col-md-3">
                        <TagPanel />
                    </div>
                </div>
            </div>
        );
    }
}

const ArchiveItem = ({id,title,time})=>(
        <div className="archive">
            <Link to={"/blog/"+id}>
                <span>{title}</span>
            </Link>
            <span className="blog-item-time float-right">
                {moment(time).format('YYYY-MM-DD')}
            </span>
        </div>
    );

export default Archive;


