import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const Index = () => {
  return (
    <div className=''>
      <main>
        <Outlet />
      </main>
        <Footer/>
    </div>
  );
};

export default Index;