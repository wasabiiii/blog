import React from 'react';
import BlogList from 'components/blog/blogList';
import TagList from 'components/tag/tagList';

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
                    <h1>Lulu's Blog</h1>
                    <p>Keep calm & Stay Blingbling</p>
                </div>
            </div>
        )
    }
}

export default Home;