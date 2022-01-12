import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Consulta from "./pages/consulta";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Cadastro />} />
        <Route path='/consulta' element={<Consulta />} />
      </Routes>
    </Router>
  );
}

export default App;
