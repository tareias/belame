import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Belame from './pages/belame';
import Lissgloss from './pages/lissgloss';
import ExtremeOrganic from './pages/extremeorganic';
import Coffeeliss from './pages/coffeeliss';
import Milacro from './pages/milacro';
import PrivacyPolicy from './pages/privacy-policy';



class Markup extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>           
                    <Route path='/' exact component={Belame} />
                    <Route path='/lissgloss' exact component={Lissgloss} />
                    <Route path='/extremeorganic' exact component={ExtremeOrganic} />
                    <Route path='/coffeeliss' exact component={Coffeeliss} />
                    <Route path='/milacro'exact component={Milacro} />
                    <Route path='/privacy-policy'exact component={PrivacyPolicy} />
                </Switch>
            </BrowserRouter>

        )
    }
}

export default Markup;