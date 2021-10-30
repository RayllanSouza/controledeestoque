import React from 'react';
import '../styles/Estoque.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Produtos from './estoqueComponents/Produtos';

function Estoque() {
  return (
    <div className="bg-estoque">
        <Router>
            <div className="container-routes">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Produtos</Link>
                  </li>
                </ul>
                <ul>
                </ul>
              </nav>
              <Switch>
                <Route path="/">
                  <Produtos />
                </Route>
              </Switch>
            </div>
        </Router>
    </div>
  );
}

export default Estoque;