import './App.css';
import Body from './Body';
import Header from './Header';
import Sidebar from './Sidebar';
import Stream from './Stream';

function App() {
  return (
    //BEM Naming
    <div className="app">
      
      <Header />
      
      <div className="app__main">
        <Sidebar />
        <Body />
      </div>
     
    </div>
  );
}

export default App;
