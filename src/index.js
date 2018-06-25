import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
// 
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import BlogDetail from './components/blog/blogDetail';
import Tag from './components/tag/tag';
import Archive from './components/archive/archive';
import About from './components/about/about';
import {Provider} from 'mobx-react';
import rootStore from './stores/rootStore';

import './css/style.css';

class App extends React.Component{
    render(){
        return (
            <Provider {...rootStore}>
            <Router>
                <div>
                    <Header />
                    
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About} />
                            <Route path="/blog/:id" component={BlogDetail} />
                            <Route path="/tag/:id" component={Tag} />
                            <Route path="/archive" component={Archive} />
                        </Switch>
                   
                   <Footer />
                </div>
            </Router>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);