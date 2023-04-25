import Footer from '@components/Footer';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
