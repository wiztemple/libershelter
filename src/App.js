import './App.css';
import Books from './components/Books';
import Navbar from './components/Navbar';
import SecondaryNav from './components/SecondaryNav';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondaryNav />
      <div className="columns">
        <div className="md-col-3 md-pl-0 sidebar-scroll">
          <Sidebar />
        </div>
        <div className="md-col-9 md-pl-0 all-books">
          <Books />
        </div>
      </div>
    </div>
  );
}

export default App;
