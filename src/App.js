import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='logo'>GitHub Search</h1>
        <span className='info'>Type in the search field the owner / repository you want to find</span>
        <Search/>
      </header>
    </div>
  );
}

export default App;
