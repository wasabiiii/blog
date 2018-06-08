import React from 'react';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
require('./style.css');
import BlogList from 'components/blog/blogList'
import TagList from 'components/tag/tagList'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Banner />
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <BlogList />
                        </div>
                        <div className="col-md-3">
                            <TagList />
                        </div>
                    </div>
                </div>

            </div>
        );

    }
}

class Banner extends React.Component{
    render(){
        return(
            <div className="banner">
                <div>
                    <p>KEEP CLAM</p>
                    <p>&</p>
                    <p>STAY BLINGBLING</p>
                </div>
            </div>
        )
    }
}

export default Home;