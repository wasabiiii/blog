import React from 'react';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
require('./style.css');
import BlogList from './blogList'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Banner />
                <BlogList />
            </div>
        );

    }
}

class Banner extends React.Component{
    render(){
        return(
            <div className="banner">
                <p>hello world</p>
            </div>
        )
    }
}

export default Home;