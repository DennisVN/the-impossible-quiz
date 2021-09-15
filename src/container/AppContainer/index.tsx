import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import QuizContainer from '../QuizContainer';

const AppContainer: FC <any> = () => {

return <Switch>
        <Route path="/quiz" render={(props) =><QuizContainer{...props}/>}/>
        <Route path="/" render={() => <h4>The impossible quiz (/quiz)</h4>}/>
    </Switch>
}

export default AppContainer;   