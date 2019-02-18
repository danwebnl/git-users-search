import * as React from 'react';
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';

import HomePage from '../components/HomePage';
import UserPage from '../components/UserPage';

class AppRouter extends React.Component<{}> {

    render() {

        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/user/:login" component={UserPage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
