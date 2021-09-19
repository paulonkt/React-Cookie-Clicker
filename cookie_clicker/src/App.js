import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClickPage from './components/pages/ClickPage'
import ItemsPage from './components/pages/ItemsPage'
import BuyPage from './components/pages/BuyPage'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 leftCol">
            <ClickPage />
          </div>
          <div className="col-12 col-md-6 centerCol">
            <ItemsPage />
          </div>
          <div className="col-12 col-md-3 rightCol">
            <BuyPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
