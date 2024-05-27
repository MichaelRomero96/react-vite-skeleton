import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => (
  <>
    <Header />
    <div className="flex h-screen border-collapse overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1 mt-8 mx-20">
        <Outlet />
      </main>
    </div>
  </>
);

export default Layout;
