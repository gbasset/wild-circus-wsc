import React from 'react';
import Accueil from './component/front/Pages/Accueil/Accueil'

import Representations from './component/front/Pages/representations/Representations'
import Prix from './component/front/Pages/Prix/Prix'
import Photographies from './component/front/Pages/Photographies/Photographies'
import Equipe from './component/front/Pages/Equipe/Equipe';
import AccueilAdmin from './component/admin/pages/AccueilAdmin'
import Login from './component/admin/pages/Login/Login'
import ViewEquipe from './component/admin/pages/ViewEquipe/ViewEquipe'
import RepresentationsAdmin from './component/admin/pages/RepresentationsAdmin/RepresentationsAdmin'
import { Switch, Route } from 'react-router-dom'
import requireAuth from '../src/component/admin/pages/Login/requireAuth'
import requireNotAuth from '../src/component/admin/pages/Login/requireNotAuth'

import './App.css';

function App() {
  return (

    <>

      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/representation" component={Representations} />
        <Route path="/prix" component={Prix} />
        <Route path="/photographies" component={Photographies} />
        <Route path="/equipe" component={Equipe} />
        <Route path="/login" component={requireNotAuth(Login)} />
        <Route path="/admin" component={requireAuth(AccueilAdmin)} />
        <Route path="/equipeadmin" component={requireAuth(ViewEquipe)} />
        <Route path="/representationadmin" component={requireAuth(RepresentationsAdmin)} />
      </Switch>

    </>
  );
}

export default App;
