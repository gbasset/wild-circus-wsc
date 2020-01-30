import React from 'react';
import Accueil from './component/front/Pages/Accueil/Accueil'

import Representations from './component/front/Pages/Representations'
import Prix from './component/front/Pages/Prix/Prix'
import Photographies from './component/front/Pages/Photographies/Photographies'
import Equipe from './component/front/Pages/Equipe/Equipe';
import AccueilAdmin from './component/admin/pages/AccueilAdmin'
import { Switch, Route } from 'react-router-dom'
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
        <Route path="/admin" component={AccueilAdmin} />
      </Switch>

    </>
  );
}

export default App;
