import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F7FBF8] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-green-50 rounded-full opacity-40 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-2xl"></div>
      <Navbar />
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default MainLayout;
