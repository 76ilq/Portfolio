import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Smooth scrolling polyfill (for older browsers)
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="w-full h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 text-white flex gap-4 justify-center z-50">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#services" className="hover:text-yellow-400">Services</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>

      {/* Sections */}
      <section id="home" className="h-screen flex items-center justify-center bg-blue-500 text-white text-3xl">
        Home Section
      </section>
      <section id="about" className="h-screen flex items-center justify-center bg-green-500 text-white text-3xl">
        About Section
      </section>
      <section id="services" className="h-screen flex items-center justify-center bg-purple-500 text-white text-3xl">
        Services Section
      </section>
      <section id="contact" className="h-screen flex items-center justify-center bg-red-500 text-white text-3xl">
        Contact Section
      </section>
    </div>
  );
};

export default App;
