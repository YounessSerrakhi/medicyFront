import Navbar from '../component/Navbar';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useLocation,Outlet } from 'react-router-dom';

function Layout(){
    return<>
    <Header/>
    <Navbar />  
    <div className='window-size'>
    <Outlet />
    </div> 
    <Footer /> 
    </>
}
export default Layout;