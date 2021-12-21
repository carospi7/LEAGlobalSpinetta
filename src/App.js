import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider } from './context/cartContext';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <header>
            <NavBar/>
          </header>
          <Switch>
            <>
            <main>
              <Route exact path='/'>
                <ItemListContainer greeting='Bienvenidos a la tienda de LEA Global'/>
              </Route>
              <Route exact path='/category/:id'>
                <ItemListContainer greeting='Por categoría'/>
              </Route>
              <Route exact path='/detail/:id'>
                <ItemDetailContainer/>
              </Route>
            </main>
            </>
          </Switch>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
