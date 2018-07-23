import React from 'react';
import BlogList from 'components/blog/blogList';
import TagPanel from 'components/tag/tagPanel';

const Home = ()=>(
        <div>
            <Banner />
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <BlogList />
                    </div>
                    <div className="col-md-3">
                        <TagPanel />
                    </div>
                </div>
            </div>
        </div>
    );

const Banner = ()=>(
        <div className="banner">
            <div>
                <h1>Lulu's Blog</h1>
                <p>Keep calm & Stay Blingbling</p>
            </div>
        </div>
    );


export default Home;