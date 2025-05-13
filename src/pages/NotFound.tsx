import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomButton from "@/components/ui/CustomButton";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark-500 text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-24">
        <div className="container text-center">
          <div className="glass-card max-w-2xl mx-auto p-12 animate-fade-in">
            <h1 className="text-gradient text-9xl font-bold mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-white/70 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <Link to="/">
              <CustomButton size="lg" className="flex items-center mx-auto">
                <ArrowLeft size={18} className="mr-2" />
                Return to Home
              </CustomButton>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
