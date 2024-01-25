import './styles/App.css';
import './styles/themify-icons.css';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import { AuthProvider } from './Contexts/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect , useState} from 'react';

function App() {
const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    if (!alertShown) {
      alert("This is a static version of my app for visualization purposes. you can't login or register or access the admin panel, you can contact me or view the docs in my portfolio for for more information.\n\nhttps://younessserrakhi.github.io/portfolio/");
      setAlertShown(true);
    }
  }, []);
  return (
    
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path='/medicyFront/' element={<Layout />}>
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
