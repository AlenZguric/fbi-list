import './App.css';
import FetchApi from './FetchApi';
import ItemComponent from './ItemComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './DataContext';

function App() {
  return (
    <DataProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FetchApi />} /> {/* Ruta za glavnu stranicu */}
          <Route path="/fbi-list" element={<FetchApi />} /> {/* Ruta za fbi-list */}
          <Route path="/item/:id" element={<ItemComponent />} /> {/* Ruta za detalje */}
        </Routes>
      </div>
    </Router>
    </DataProvider>
  );
}

export default App;
