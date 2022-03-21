import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecSection from './RecSection';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecSection />
      </div>      
    </div>
  );
}

export default App;
