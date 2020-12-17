import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Hola from '../../pages/Hola'
import Chao from '../../pages/Chao'
import Error from '../../pages/Error'

const Saludo =  () => (
  <Switch>
    <Route path="/saludo/hola" exact component={Hola} />
    <Route path="/saludo/chao" exact component={Chao} />
    <Route component={Error} /> 
  </Switch>
);

export default Saludo