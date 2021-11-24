import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting='Bienvenidos a la tienda de LEA Global'/>
      </main>
    </div>
  );
}

export default App;
