import React, {Component} from 'react';
import Index from './views/index';
import About from './views/about';
import Books from './views/book';
import Details from './views/details';
import User from './views/user';

import {Switch, Route, Redirect} from 'react-router-dom';

class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact render={() => (
                    <Redirect to='/index'/>
                )}/>
                <Route path='/index' component={Index}/>
                <Route path='/details' component={Details}/>
                <Route path='/about' component={About}/>
                <Route path='/books' component={Books}/>
                <Route path='/user' component={User}/>
            </Switch>
        );
    }
}

export default RouterIndex;
