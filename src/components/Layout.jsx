import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Outlet /> {/* Render the matched child routes */}
    </div>
  );
};

export default Layout;