import Index from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Index/>} path="/" default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
