import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Itemlistcontainer/Itemlistcontainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Este es un mensaje desde el Itemlistcontainer' />
    </div>
  );
}

export default App;
