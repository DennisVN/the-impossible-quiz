import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import QuizContainer from '../QuizContainer';

const AppContainer: FC <any> = () => {

return <Switch>
        <Route path="/quiz" render={(props) =><QuizContainer{...props}/>}/>
    </Switch>

}

export default AppContainer;