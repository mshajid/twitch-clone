import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM Naming
    <div className="app">
      <Header />
      <Sidebar />
      
    </div>
  );
}

export default App;
