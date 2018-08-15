import React from "react";
import { Switch, Route } from 'react-router-dom';
import AppBar  from './components/Appbar/AppBar.jsx';

import ExpenseDashboardPage from './views/Dashboard/ExpenseDashboardPage.jsx';
import AddExpensePage  from './views/Add/AddExpensePage.jsx';
import EditExpensePage  from './views/Edit/EditExpensePage.jsx';
import HelpPage  from './views/Help/HelpPage.jsx';




const App = () => (
    <div>
        <AppBar />
        <Switch>
            <Route path='/' exact component={ExpenseDashboardPage} />
            <Route path='/add' component={AddExpensePage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
        </Switch>
    </div>
);

export default App;