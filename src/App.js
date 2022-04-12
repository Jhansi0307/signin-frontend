
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import Home from './Home';

function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      
      <Route path="/login" element={<LoginPage/>}>
      
      </Route>
    </Routes>
    </BrowserRouter> */}
    <LoginPage/>
    
    </>
  );
}

export default App;
