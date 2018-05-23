import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
// 
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import BlogDetail from './components/blogDetail';
import Cate from './components/cate';

class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Header />
                    {/*<Provider store={store}>*/}
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={Home} />
                            <Route path="/blog/:id" component={BlogDetail} />
                            <Route path="/cate/:id" component={Cate} />
                            
                        </Switch>
                   {/* </Provider> */}
                   <Footer />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);