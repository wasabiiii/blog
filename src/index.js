import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
// 
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import BlogDetail from './components/blog/blogDetail';
import Tag from './components/tag/tag';
import {Provider} from 'mobx-react';
import rootStore from './stores/rootStore';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component{
    render(){
        return (
            <Provider {...rootStore}>
            <Router>
                <div>
                    <Header />
                    
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={Home} />
                            <Route path="/blog/:id" component={BlogDetail} />
                            <Route path="/tag/:id" component={Tag} />
                            
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