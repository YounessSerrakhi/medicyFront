import './styles/App.css';
import './styles/themify-icons.css';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import { AuthProvider } from './Contexts/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
